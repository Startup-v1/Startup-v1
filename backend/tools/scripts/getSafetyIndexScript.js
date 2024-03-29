// THIS FILE IMPORTS 2 FILES
// 1. A MANUALLY GENERATED SAFETYINDEXLIST FROM https://gfmag.com/data/safest-countries-world/
// 2. A COUNTRIES LIST
// IT GENERATES A NEW FILE WITH THE RIGHT SAFETYINDEX ADDED TO EACH COUNTRY

import { safetyIndexList } from "../safetyIndex.js";
import { countries } from "../countries.js";
import fs from "fs";

countries.forEach((country) => {
  for (const key in safetyIndexList) {
    // Check if the current key matches the target key
    if (key === country.name) {
      // Retrieve the value corresponding to the target key
      const targetValue = safetyIndexList[key];
      console.log(`The value of ${country.name} is ${targetValue}`);
      country.safetyIndex = targetValue;

      break; // Exit the loop since we found the value
    }
  }
});

const saveFile = (jsonData) => {
  try {
    fs.writeFileSync(`countries_with_safety_index.json`, jsonData);
    console.log(`Safety index added successfully`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

saveFile(JSON.stringify(countries));
