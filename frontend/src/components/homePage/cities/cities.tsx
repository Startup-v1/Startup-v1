import "./cities.scss";

export const CitiesGrid = () => {
  //TODO: This should come from the Database
  const cities = [
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
    {
      name: "Tokyo",
      country: "Japan",
      cost: 100,
    },
  ];
  return (
    <section className="flex justify-center mt-28">
      <div className="grid gap-4 grid-cols-3 gap-x-16 gap-y-16">
        {cities.map((city) => {
          return (
            <div key={city.name} className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex-center">
                <h1 className="cityName">{city.name}</h1>
                <h2 className="cityCountry">{city.country}</h2>
                <span className="cityCost">{city.cost} USD$/month</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
