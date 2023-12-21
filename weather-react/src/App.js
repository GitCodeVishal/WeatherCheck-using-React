import React, { useState } from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'aabf9bf00e872207441d5c3ea133acf5';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  const checkWeather = async () => {
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (!response.ok) throw Error('Failed to fetch data');
      const info = await response.json();
      console.log(info);
      setData(info);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkWeather();
  };

  return (
    <div className="App">
      <Search setCity={setCity} handleSubmit={handleSubmit} />
      {data && <WeatherInfo data={data} error={error} />}
    </div>
  );
}

export default App;
