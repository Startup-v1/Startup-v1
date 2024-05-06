// Load these dinamically depending on dev/prod environment

export const apiUrl = Object.freeze({
  cities: "http://localhost:3000/api/cities",
  city: "http://localhost:3000/api/city",
});
