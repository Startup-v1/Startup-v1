import citySchema from "../../src/models/City";
import mongoose from "mongoose";
// @ts-ignore
import { cities } from "../cities";
// @ts-ignore
import { countries } from "../countries";

async function seedData() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:bMXmt84MvvJ5GX20@startup1.inwxclt.mongodb.net/?retryWrites=true&w=majority&appName=Startup1"
    );

    // Delete all companies
    await (citySchema as any).deleteMany({});

    cities.forEach((city: any) => {
      //Add country info to cities data structure
      const matchingCountry = countries.find(
        (country: any) => country.countryCode === city.countryCode
      );
      city.country = matchingCountry;

      //Convert weather datastructure to array
      const weatherArray = [];
      for (const month in city.weather) {
        weatherArray.push(city.weather[month]);
      }
      city.weather = weatherArray;
    });

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
