import citySchema from "../../src/models/City";
import mongoose from "mongoose";

async function seedData() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:bMXmt84MvvJ5GX20@startup1.inwxclt.mongodb.net/?retryWrites=true&w=majority&appName=Startup1"
    );

    // Delete all companies
    await (citySchema as any).deleteMany({});

    const cities = [
      {
        countryCode: "JP",
        population: 1603043,
        location: {
          latitude: 33.59,
          longitude: 130.401666666,
        },
        name: "Fukuoka",
        weather: [
          {
            totalRain: "91.7",
            totalSnow: "4.1",
            maxTemp: "9.9",
            minTemp: "4.3",
            avgTemp: "7.0",
            avgHumidity: "69.2",
          },
          {
            totalRain: "181.0",
            totalSnow: "0.0",
            maxTemp: "11.5",
            minTemp: "5.9",
            avgTemp: "8.5",
            avgHumidity: "74.4",
          },
          {
            totalRain: "163.6",
            totalSnow: "0.0",
            maxTemp: "13.1",
            minTemp: "6.5",
            avgTemp: "9.7",
            avgHumidity: "65.0",
          },
          {
            totalRain: "241.9",
            totalSnow: "0.0",
            maxTemp: "19.6",
            minTemp: "11.1",
            avgTemp: "15.0",
            avgHumidity: "67.5",
          },
          {
            totalRain: "236.1",
            totalSnow: "0.0",
            maxTemp: "23.1",
            minTemp: "14.7",
            avgTemp: "18.6",
            avgHumidity: "72.2",
          },
          {
            totalRain: "276.8",
            totalSnow: "0.0",
            maxTemp: "26.4",
            minTemp: "19.2",
            avgTemp: "22.5",
            avgHumidity: "80.4",
          },
          {
            totalRain: "442.9",
            totalSnow: "0.0",
            maxTemp: "30.9",
            minTemp: "23.7",
            avgTemp: "26.8",
            avgHumidity: "81.9",
          },
          {
            totalRain: "206.0",
            totalSnow: "0.0",
            maxTemp: "31.6",
            minTemp: "24.3",
            avgTemp: "27.5",
            avgHumidity: "78.6",
          },
          {
            totalRain: "85.6",
            totalSnow: "0.0",
            maxTemp: "28.6",
            minTemp: "22.0",
            avgTemp: "24.8",
            avgHumidity: "79.1",
          },
          {
            totalRain: "27.7",
            totalSnow: "0.0",
            maxTemp: "21.6",
            minTemp: "14.8",
            avgTemp: "17.8",
            avgHumidity: "62.0",
          },
          {
            totalRain: "76.6",
            totalSnow: "0.0",
            maxTemp: "17.2",
            minTemp: "10.1",
            avgTemp: "13.4",
            avgHumidity: "64.0",
          },
          {
            totalRain: "79.0",
            totalSnow: "13.9",
            maxTemp: "12.0",
            minTemp: "6.2",
            avgTemp: "8.8",
            avgHumidity: "68.4",
          },
        ],
        photoUrl: {
          small:
            "https://images.pexels.com/photos/11947131/pexels-photo-11947131.jpeg?auto=compress&cs=tinysrgb&h=350",
          large:
            "https://images.pexels.com/photos/11947131/pexels-photo-11947131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        country: {
          countryCode: "IR",
          name: "Iran",
          flag: "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Iran.svg",
          currency: {
            code: "IRR",
            symbol: "IRR",
            usdPair: 42075,
          },
          languages: ["Persian/Farsi"],
          safetyIndex: 11.8461,
          continent: {
            name: "Asia",
            code: "AS",
          },
        },
      },
    ];

    await (citySchema as any).create(cities);
    console.log("Cities created");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    mongoose.disconnect();
    process.exit();
  }
}

seedData();
