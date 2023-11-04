import React, { useEffect, useState } from "react";
import "./parts/style.css";
const Tempapp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("Kharagpur");
  const apikey = "097e23c466497a9268f6b8431e98abc3";
  useEffect(() => {
    const fetchApi = async () => {
      const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=` +
        apikey;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);

      console.log(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="top">
      <h1>☀️WEATHER🌧</h1>

      <div className="search">
        <input
          type="search"
          name="search"
          placeholder="Location"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {!city ? (
        <h3>NO DATA FOUND</h3>
      ) : (
        <>
          <h1 className="loc">
            <i class="fa-solid fa-location-dot"></i> {search.toUpperCase()}
          </h1>
          <div className="box">
            <div className="temp">
              <h1>
                <i class="fa-solid fa-temperature-three-quarters"></i>{" "}
                Temperature
              </h1>
              <h2>{city.temp}°C</h2>
            </div>

            <div className="box_in">
              <div className="detail">
                <h1>Feels Like</h1>
                <h2>{city.feels_like}°C</h2>
              </div>

              <div className="detail">
                <h1>Humidity</h1>
                <h2>{city.humidity}%</h2>
              </div>

              <div className="detail">
                <h1>Pressure</h1>
                <h2>{city.pressure}hpa</h2>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="footer">
        <p>Created by:</p>
        <p>Mahin Hussain</p>
        <p>IIT KGP</p>
      </div>
    </div>
  );
};
export default Tempapp;
