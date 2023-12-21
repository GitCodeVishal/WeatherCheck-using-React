import { useState } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

function App() {

const[city,setCity] = useState('')

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(city);
};

  return (
    <div className="App">
    <Search setCity={setCity} handleSubmit={handleSubmit}/>
    <WeatherInfo/>
    </div>
  );
}

export default App;
