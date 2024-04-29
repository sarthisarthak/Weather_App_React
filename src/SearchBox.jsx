import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e0496348a218bfbcc3f1dbf20ab425b6";

  async function getWeatherInfo(city) {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        pressure: jsonResponse.main.pressure,
        wind: jsonResponse.wind.speed,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      // console.log(city);
      let newinfo = await getWeatherInfo(city);
      updateInfo(newinfo);
      setCity("");
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <h4 style={{ color: "red" }}>No Such Place Exist!</h4>}
      </form>
    </div>
  );
};

export default SearchBox;
