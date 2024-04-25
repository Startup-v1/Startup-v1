// This does not support modules, remove type: module from package.json (For some reason an import breaks...)
const {
  getContinentCode,
  getContinentName,
} = require("@brixtol/country-continent");

const countries = require("../countries");
const fs = require("fs");

console.log('countries :>> ', countries);

countries.forEach((country) => {
  const continentName = getContinentName(country.countryCode);
  const continentCode = getContinentCode(country.countryCode);

  country.continent = {
    name: continentName,
    code: continentCode,
  };
});

const saveFile = (jsonData) => {
  try {
    fs.writeFileSync(`countries_with_continent.json`, jsonData);
    console.log(`Continents added successfully`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

saveFile(JSON.stringify(countries));
