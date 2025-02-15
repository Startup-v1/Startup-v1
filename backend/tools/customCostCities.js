const customCostCities = new Set([
    "Amsterdam",
    "Athens",
    "Auckland",
    "Austin",
    // "Canggu", NOT FOUND
    "Bangkok",
    "Barcelona",
    "Belgrade",
    "Berlin",
    "Bogotá",
    "Bordeaux",
    "Brasília",
    "Bratislava",
    "Brisbane",
    "Bristol",
    "Ko-Phan-Ghan-Thailand", // "Ko Pha-ngan"
    "Brussels",
    "Budapest",
    "Bucharest",
    "Buenos Aires",
    "Cairns",
    "Cairo-Egypt", // "Cairo",
    "Cape Town",
    "Chiang Mai",
    "Chicago",
    "Christchurch",
    "Cologne",
    "Penang",
    "Copenhagen",
    "Cusco-Peru", // "Cusco",
    "Da Nang",
    "Dallas",
    "Denver",
    "Detroit",
    "Dubai",
    "Dublin",
    "Dubrovnik",
    "Edinburgh",
    "Florence",
    "Cebu",
    "Florianópolis",
    "Frankfurt",
    "Geneva",
    "Gent", // "Ghent",
    "Glasgow",
    "Granada",
    "Guadalajara",
    "Guangzhou",
    "Hamburg",
    "Hanoi",
    "Helsinki",
    "Ho Chi Minh City",
    "Hong Kong",
    "Honolulu",
    "Houston",
    "Istanbul",
    "Jakarta",
    "Johannesburg",
    "Kansas City",
    "Kiev", // "Kyiv",
    "Krakow-Cracow", // "Kraków",
    "Kuala Lumpur",
    "Kyoto",
    "Lagos",
    "Las-Palmas", // "Las Palmas de Gran Canaria",
    "Leeds",
    "Lima",
    "Lisbon",
    "Liverpool",
    "Ljubljana",
    "London",
    "Los Angeles",
    "Lyon",
    "Madrid",
    "Málaga",
    "Manchester",
    "Manila",
    "Marrakech",
    "Marseille",
    "Medellín",
    "Melbourne",
    "Mexico City",
    "Miami",
    "Delhi",
    "Milan",
    "Minneapolis",
    "Montreal",
    "Moscow",
    "Mumbai",
    "Munich",
    "Nairobi",
    "Nashville",
    "New Orleans",
    "New-York", // "New York City",
    "Nice",
    "Nicosia",
    "Osaka",
    "Oslo",
    "Panama City",
    "Paris",
    "Perth",
    "Philadelphia",
    "Phnom Penh",
    "Phoenix",
    "Porto",
    "Prague",
    "Providence",
    "Quebec City",
    "Quito",
    "Raleigh",
    "Reykjavík",
    "Rio de Janeiro",
    "Rome",
    "Saint Petersburg",
    "Salt Lake City",
    "Salvador",
    "San Diego",
    "San Francisco",
    "San Jose",
    "San Juan",
    "Santiago",
    "Sao-Paulo", // "São Paulo",
    "Seattle",
    "Seoul",
    "Sevilla", // "Seville",
    "Shanghai",
    "Siem Reap",
    "Singapore",
    "Sofia",
    "Split",
    "Saint-louis-Senegal", // "St. Louis",
    "Stockholm",
    "Stuttgart",
    "Sydney",
    "Taipei",
    "Tallinn",
    "Tbilisi",
    "Tel-Aviv-Yafo", // "Tel Aviv",
    "Tokyo",
    "Toronto",
    "Toulouse",
    "Valencia",
    "Vancouver",
    "Venice",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Wellington",
    "Wroclaw", // "Wrocław",
    "Xiamen",
    "Yangon",
    "Zagreb",
    "Zurich", // "Zürich",
    "Adelaide",
    "Ahmedabad",
    "Albuquerque",
    "Alicante",
    "Antalya",
    "Antwerp",
    "Asheville",
    "Asunción",
    "Baku",
    "Baltimore",
    // "Bengaluru", NOT FOUND
    "Banja Luka",
    "Basel",
    "Belfast",
    "Bergen",
    "Bern",
    "Bilbao",
    "Birmingham",
    "Braga",
    "Bremen",
    "Brno",
    "Buffalo",
    "Bursa",
    "Busan",
    "Calgary",
    "Canberra",
    "Cardiff",
    "Casablanca",
    "Changsha-China", // "Changsha",
    "Charleston",
    "Chengdu",
    "Chennai",
    "Columbus",
    "Colombo",
    "Cork",
    "Curitiba",
    "Dalian",
    "Dar-Es-Salaam", // "Dar es Salaam",
    "Davao", // "Davao City",
    "Dhaka",
    "Doha",
    "Dortmund",
    "Dresden",
    "Durban",
    "Edmonton",
    "Yekaterinburg",
    "Essen",
    "Fortaleza",
    "Foshan",
    "Fukuoka",
    "Puerto-Del-Rosario-Spain", // "Puerto del Rosario",
    "Gaziantep",
    "Gdansk", // "Gdańsk",
    "Genoa",
    "Georgetown",
    "Oaxaca-De-Juarez", // "Oaxaca",
    "Gothenburg",
    "Groningen",
    "Gwangju-South-Korea", //"Gwangju",
    "Halifax",
    "Halle",
    "Hamilton",
    "Hangzhou",
    "Harare",
    "Havana",
    "Hiroshima-Japan", // "Hiroshima",
    "Hobart",
    // "Hội An", NOT FOUND
    "Atlanta",
    "Yerevan",
    "Hyderabad",
    "Incheon",
    "Innsbruck",
    "Islamabad",
    "Izmir", // "İzmir",
    "Jaipur",
    "Jersey City",
    "Jinan-China", // "Jinan",
    "Kampala",
    "Kathmandu",
    "Kingston",
    "Kobe",
    "Kochi",
    "Kolkata",
    "Kunming-Yunnan-China", // "Kunming",
    "Kuwait City",
    "La Paz",
    "Lahore",
    "Canary-Islands", // "Lanzarote",
    "Lille",
    // "Lombok", NOT FOUND
    "Ca-Mau-Vietnam", // "Macau",
    "Malmo", // "Malmö",
    "Manaus",
    "Mendoza-Argentina", // "Mendoza",
    "Monterrey",
    "Montevideo",
    "Muscat",
    "Nagoya",
    "Naples",
    "Nara-Mali", // "Nara",
    "Nassau",
    "Nizhny-Novgorod-Russia", // "Nizhny Novgorod",
    "Novi Sad",
    "Novosibirsk",
    "Odessa",
    "Okayama-Japan", // "Okayama",
    "Ottawa",
    "Oxford",
    "Paphos",
    "Phuket", // "Patong",
    "Pattaya",
    "Phuket",
    "Plovdiv",
    "Podgorica",
    "Poznan", // "Poznań",
    "Pune",
    "Qingdao",
    "Queenstown",
    "Rabat",
    "Recife",
    "Riga",
    "Riyadh",
    "Rotterdam",
    "Saint-denis-Reunion", // "Saint-Denis",
    // "Saint-Martin", NOT FOUND
    "San José",
    "Santa Cruz de Tenerife",
    "Santo Domingo",
    "Sarajevo",
    "Santorini-Greece", // "Santorini",
    "Semarang",
    "Sendai",
    "Shenzhen",
    "Southampton",
    "Stavanger",
    "Strasbourg",
    "Surabaya",
    "Suzhou",
    "Tainan",
    "Tampere",
    "Taoyuan",
    "Tashkent",
    "Tehran",
    "Thessaloniki",
    "Port-Louis", // "St. Louis",
    "Hefei",
  ]);
  
  
  export default customCostCities;