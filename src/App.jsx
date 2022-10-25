import React from "react";
import "./App.css";
import SelectionSection from "./components/selectionSection";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchWithAxios = async (url, setResp) => {
  axios
    .get(url)
    .then((data) =>
      setResp(() => {
        let weather = [];
        let dataList = data.data.list;
        for (let i = 0; i < dataList.length; i++) {
          weather.push([]);
          weather[i].push(dataList[i].weather[0].main);
          let timeHours = dataList[i].dt_txt.split(" ").pop();
          timeHours = timeHours.split(":").shift();
          weather[i].push(timeHours);
        }
        return weather;
      })
    )
    .catch((e) => console.log(e));
};

function App() {
  const [data, setData] = useState([]);
  const urls = {
    weather:
      "https://api.openweathermap.org/data/2.5/forecast?lat=52.52&lon=13.40&appid=" +
      process.env.REACT_APP_WEATHER_API_KEY,
  };

  useEffect(() => {
    fetchWithAxios(urls.weather, setData);
  }, []);
  console.log(data);

  return (
    <div>
      <SelectionSection />
    </div>
  );
}

export default App;
