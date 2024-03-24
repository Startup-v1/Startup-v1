// THIS SCRIPT ADDS WEATHER DATA TO A CITY OBJECT
// Example request https://api.weatherapi.com/v1/history.json?key=fb38f4a3b88949cfb9b145958242303&q=9.75778,100.02914&dt=2023-03-25&end_dt=2023-04-24
import axios from "axios";
import fs from "fs";
import cities from "../citiesTest.js";

const today = new Date("2024-03-24");
const apiKey = "fb38f4a3b88949cfb9b145958242303";

const fetchWeather = async () => {
  console.time("TotalTime");
  const startTime = Date.now();

  try {
    for (const [index, city] of cities.entries()) {
      console.log(`[${index + 1}/299] Fetching data for :>> `, city.name);
      await fetchCityWeather(city);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }

  calculateRequestsTime(startTime);
};

const fetchCityWeather = async (city) => {
  const citiWeatheryDailyAverages = {};
  let currentDate = new Date("2023-03-25");

  const latitude = city.location.latitude;
  const longitude = city.location.longitude;

  while (currentDate <= today) {
    try {
      const { startDate, endDate } = getTimeRange(currentDate);
      const url = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${latitude},${longitude}&dt=${startDate}&end_dt=${endDate}`;

      console.log("startRequest for 30 day period :>> ", startDate, endDate);
      const response = await axios.get(url);
      console.log("response arrived :>> ", startDate, endDate);

      //30 days forecast
      const { forecastday } = response.data.forecast;

      forecastday.forEach((dayData) => {
        const date = new Date(dayData.date);
        const day = date.getDate();
        const month = date.getMonth() + 1;

        //Exclude some unnecesary values
        const {
          maxtemp_f,
          mintemp_f,
          avgtemp_f,
          totalprecip_in,
          condition,
          ...rest
        } = dayData.day;

        //check if obj already has data for given month
        if (citiWeatheryDailyAverages.hasOwnProperty(month)) {
          citiWeatheryDailyAverages[month][day] = {
            [dayData.date]: { ...rest },
          };
        } else {
          citiWeatheryDailyAverages[month] = {
            [day]: { [dayData.date]: { ...rest } },
          };
        }
      });

      // Move the date forward
      currentDate.setDate(currentDate.getDate() + 29);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const sortedCityWeather = Object.fromEntries(
    Object.entries(citiWeatheryDailyAverages).sort(
      ([a], [b]) => parseInt(a) - parseInt(b)
    )
  );

  //CREATE MONTHLY AVERAGES
  const cityWeatherMonthlyAverages = {};

  for (const [month, monthWeather] of Object.entries(sortedCityWeather)) {
    let totalRainForMonth = 0;
    let totalSnowForMonth = 0;
    let maxTemp = 0;
    let minTemp = 0;
    let avgTemp = 0;
    let avgHumidity = 0;

    // Iterate over monthly values
    for (const entry of Object.values(monthWeather)) {
      // Iterate over daily values
      for (const day of Object.values(entry)) {
        totalRainForMonth += day.totalprecip_mm;
        totalSnowForMonth += day.totalsnow_cm;
        maxTemp += day.maxtemp_c;
        minTemp += day.mintemp_c;
        avgTemp += day.avgtemp_c;
        avgHumidity += day.avghumidity;
      }
    }

    const daysInMonth = getDaysInMonth(month);

    // Get monthy average for each value
    maxTemp = maxTemp / daysInMonth;
    minTemp = minTemp / daysInMonth;
    avgTemp = avgTemp / daysInMonth;
    avgHumidity = avgHumidity / daysInMonth;

    cityWeatherMonthlyAverages[month] = {
      totalRain: totalRainForMonth.toFixed(1),
      totalSnow: totalSnowForMonth.toFixed(1),
      maxTemp: maxTemp.toFixed(1),
      minTemp: minTemp.toFixed(1),
      avgTemp: avgTemp.toFixed(1),
      avgHumidity: avgHumidity.toFixed(1),
    };
  }

  // Find the object with the specific country code
  let currentCity = cities.find(
    (cityFromJson) => cityFromJson.countryCode === city.countryCode
  );
  currentCity.weather = cityWeatherMonthlyAverages;

  await saveFile(city.name, JSON.stringify(cities));
};

function getDaysInMonth(month) {
  // Month is 0-based, so subtract 1 from the provided month
  // Create a new Date object for the 0th day of the next month
  const date = new Date(2024, month, 0);
  // The 0th day of the next month is the last day of the current month
  // The getDate() method returns the day of the month (1-31)
  return date.getDate();
}

const saveFile = (cityName, jsonData) => {
  try {
    fs.writeFileSync(`${cityName}_weather.json`, jsonData);
    console.log(`${cityName} weather added successfully`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

const getTimeRange = (currentDate) => {
  const startDate = currentDate.toISOString().split("T")[0];

  // Calculate the end date for the 30-day range
  const endDateRange = new Date(currentDate);
  endDateRange.setDate(endDateRange.getDate() + 29);
  const endDate = endDateRange.toISOString().split("T")[0];

  return { startDate: startDate, endDate: endDate };
};

const calculateRequestsTime = (startTime) => {
  const endTime = Date.now();
  console.timeEnd("TotalTime");
  console.log(`Total time taken: ${endTime - startTime} milliseconds`);
};

//RUN SCRIPT
fetchWeather();
