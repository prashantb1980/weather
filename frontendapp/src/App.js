import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import ImageList from "./components/ImageList";

const App = () => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    getGeoLocation();
    getImageResponses().catch();
  }, []);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {}, []);
  const getImageResponses = async () => {
    //const response= await axios.get('https://pixabay.com/api/?key=39198643-9679ba6bf75088fe45fa4e01a&q=yellow+flowers&image_type=photo')
    const response = await axios.get("http://localhost:9000/api/weather");
    console.log(response.data)
    setWeather(response.data);
  };
  const getGeoLocation = () => {
    // Check if geolocation is available in the user's browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the latitude and longitude from the geolocation response
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        },
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  return (
    <div>
      <ImageList weatherforecast={weather}/>
      <div>
        {latitude !== null && longitude !== null ? (
          <div>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
          </div>
        ) : (
          <p>Getting location...</p>
        )}
      </div>
    </div>
  );
};

export default App;
