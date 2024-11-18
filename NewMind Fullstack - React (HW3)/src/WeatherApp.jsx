import React, { useEffect, useState } from "react";
import { useWeather } from "./WeatherContext";
import { fetchWeatherData } from "./WeaterAPI";
import Select from "react-select";
import "../src/weatherApp.css";

const WeatherApp = () => {
  const { state, dispatch } = useWeather();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchWeatherData(state.selectedCity);
        dispatch({ type: "SET_WEATHER_DATA", payload: data });
      } catch (error) {
        setError("Unable to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state.selectedCity, dispatch]);

  const cityOptions = [
    { value: "Adana", label: "Adana" },
    { value: "Adıyaman", label: "Adıyaman" },
    { value: "Afyonkarahisar", label: "Afyonkarahisar" },
    { value: "Ağrı", label: "Ağrı" },
    { value: "Amasya", label: "Amasya" },
    { value: "Ankara", label: "Ankara" },
    { value: "Antalya", label: "Antalya" },
    { value: "Artvin", label: "Artvin" },
    { value: "Aydın", label: "Aydın" },
    { value: "Balıkesir", label: "Balıkesir" },
    { value: "Bilecik", label: "Bilecik" },
    { value: "Bingöl", label: "Bingöl" },
    { value: "Bitlis", label: "Bitlis" },
    { value: "Bolu", label: "Bolu" },
    { value: "Burdur", label: "Burdur" },
    { value: "Bursa", label: "Bursa" },
    { value: "Çanakkale", label: "Çanakkale" },
    { value: "Çankırı", label: "Çankırı" },
    { value: "Çorum", label: "Çorum" },
    { value: "Denizli", label: "Denizli" },
    { value: "Diyarbakır", label: "Diyarbakır" },
    { value: "Edirne", label: "Edirne" },
    { value: "Elazığ", label: "Elazığ" },
    { value: "Erzincan", label: "Erzincan" },
    { value: "Erzurum", label: "Erzurum" },
    { value: "Eskişehir", label: "Eskişehir" },
    { value: "Gaziantep", label: "Gaziantep" },
    { value: "Giresun", label: "Giresun" },
    { value: "Gümüşhane", label: "Gümüşhane" },
    { value: "Hakkâri", label: "Hakkâri" },
    { value: "Hatay", label: "Hatay" },
    { value: "Isparta", label: "Isparta" },
    { value: "Mersin", label: "Mersin" },
    { value: "istanbul", label: "İstanbul" },
    { value: "izmir", label: "İzmir" },
    { value: "Kars", label: "Kars" },
    { value: "Kastamonu", label: "Kastamonu" },
    { value: "Kayseri", label: "Kayseri" },
    { value: "Kırklareli", label: "Kırklareli" },
    { value: "Kırşehir", label: "Kırşehir" },
    { value: "Kocaeli", label: "Kocaeli" },
    { value: "Konya", label: "Konya" },
    { value: "Kütahya", label: "Kütahya" },
    { value: "Malatya", label: "Malatya" },
    { value: "Manisa", label: "Manisa" },
    { value: "Kahramanmaraş", label: "Kahramanmaraş" },
    { value: "Mardin", label: "Mardin" },
    { value: "Muğla", label: "Muğla" },
    { value: "Muş", label: "Muş" },
    { value: "Nevşehir", label: "Nevşehir" },
    { value: "Niğde", label: "Niğde" },
    { value: "Ordu", label: "Ordu" },
    { value: "Rize", label: "Rize" },
    { value: "Sakarya", label: "Sakarya" },
    { value: "Samsun", label: "Samsun" },
    { value: "Siirt", label: "Siirt" },
    { value: "Sinop", label: "Sinop" },
    { value: "Sivas", label: "Sivas" },
    { value: "Tekirdağ", label: "Tekirdağ" },
    { value: "Tokat", label: "Tokat" },
    { value: "Trabzon", label: "Trabzon" },
    { value: "Tunceli", label: "Tunceli" },
    { value: "Şanlıurfa", label: "Şanlıurfa" },
    { value: "Uşak", label: "Uşak" },
    { value: "Van", label: "Van" },
    { value: "Yozgat", label: "Uşak" },
    { value: "Zonguldak", label: "Zonguldak" },
    { value: "Aksaray", label: "Aksaray" },
    { value: "Bayburt", label: "Bayburt" },
    { value: "Karaman", label: "Karaman" },
    { value: "Kırkkale", label: "Kırkkale" },
    { value: "Batman", label: "Batman" },
    { value: "Şırnak", label: "Şırnak" },
    { value: "Bartın", label: "Bartın" },
    { value: "Ardahan", label: "Ardahan" },
    { value: "Iğdır", label: "Iğdır" },
    { value: "Yalova", label: "Yalova" },
    { value: "Karabük", label: "Karabük" },
    { value: "Kilis", label: "Kilis" },
    { value: "Osmaniye", label: "Osmaniye" },
    { value: "Düzce", label: "Düzce" },
  ];

  const handleCityChange = (selectedOption) => {
    dispatch({ type: "SET_SELECTED_CITY", payload: selectedOption.value });
  };

  const renderWeatherAverages = () => {
    if (state.weatherData && state.weatherData.list) {
      const dailyAverages = {};

      state.weatherData.list.forEach((period) => {
        const date = period.dt_txt.split(" ")[0];

        if (!dailyAverages[date]) {
          dailyAverages[date] = {
            tempSum: 0,
            feelsLikeSum: 0,
            count: 0,
          };
        }
        dailyAverages[date].tempSum += period.main.temp;
        dailyAverages[date].feelsLikeSum += period.main.feels_like;
        dailyAverages[date].count++;
      });

      const allDates = Object.keys(dailyAverages);
      return allDates.map((date, index) => {
        const average = {
          temp: dailyAverages[date].tempSum / dailyAverages[date].count,
          feels_like:
            dailyAverages[date].feelsLikeSum / dailyAverages[date].count,
        };

        const currentDate = new Date(date);
        const dayOfWeek = currentDate.toLocaleDateString("en-US", {
          weekday: "short",
        });

        const weatherCondition = state.weatherData.list.find(
          (period) => period.dt_txt.split(" ")[0] === date
        )?.weather[0]?.description;

        const getWeatherIcon = (condition) => {
          switch (condition) {
            case "Clear":
              return require("./SVG/day_clear.svg").default;
            case "clear sky":
              return require("./SVG/day_clear.svg").default;
            case "light rain":
              return require("./SVG/rain.svg").default;

            case "Clouds":
              return require("./SVG/cloudy.svg").default;
            case "few clouds":
              return require("./SVG/cloudy.svg").default;
            case "overcast clouds":
              return require("./SVG/overcast.svg").default;
            case "scattered clouds":
              return require("./SVG/cloudy.svg").default;
            case "broken clouds":
              return require("./SVG/broken_clouds.svg").default;

            case "snow":
              return require("./SVG/snow.svg").default;
            case "light snow":
              return require("./SVG/snow.svg").default;

            case "Rain":
              return require("./SVG/rain.svg").default;

            default:
              return "default.svg";
          }
        };

        const iconFileName = getWeatherIcon(weatherCondition);

        const today = new Date();
        const isToday = currentDate.getDate() === today.getDate();
  

        return (
          <div key={index} className={`daily-weather ${isToday ? "today" : ""}`}>
            <p className="day">{dayOfWeek}</p>
            <img
              className="icon"
              src={iconFileName}
              alt={`Weather Icon - ${weatherCondition}`}
            />
            <p className="weatherCondition">{weatherCondition}</p>
            <div className="values">
              <span className="temp">{average.temp.toFixed(0)}°</span>
              <span className="feel">{average.feels_like.toFixed(0)}°</span>
            </div>

            <hr />
          </div>
        );
      });
    }
  };

  return (
    <div className="page">
      <div className="select-div">
        <Select
          id="citySelect"
          value={{ value: state.selectedCity, label: state.selectedCity }}
          options={cityOptions}
          onChange={handleCityChange}
        />
      </div>

      <div>
        {state.weatherData && (
          <div className="weather-div">{renderWeatherAverages()}</div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
