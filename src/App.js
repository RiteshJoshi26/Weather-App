import { useState } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar";
import WeatherCard from "./component/WeatherCard";
import { API } from "./Fetchapi/Api";

function App() {
  const [location, setlocation] = useState("Location");
  const [temp, settemp] = useState("?");
  const [text, settext] = useState("");
  const [country, setcountry] = useState("");

  const handlechange = (e) => {
    if (e.target.value === "") {
      settext("");
      setcountry("");
    } else {
      settext(e.target.value);
    }
  };

  const handleclick = async (e) => {
    if (e.key === "Enter") {
      try {
        const result = await API(text); // fetch using typed value
        settemp(result.main.temp);
        if(result.sys.country){
          setcountry(`, ${result.sys.country}`);
        }
        else{
          setcountry("")
        }
        if (result.main.temp >= 36) {
          document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1573552894689-6f7c17aec384?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYXRoZXIlMjBob3QlMjBoZWF0d2F2ZXxlbnwwfHwwfHx8MA%3D%3D')";
        } else if (result.main.temp >= 30 && result.main.temp < 36) {
          document.body.style.backgroundImage =
            "url('https://glamadelaide.com.au/wp-content/uploads/2025/04/weather-.jpg')";
        } else if (result.main.temp >= 20 && result.main.temp < 30) {
          document.body.style.backgroundImage =
            "url('https://s7d2.scene7.com/is/image/TWCNews/PartlyCloudy4')";
        } else if (result.main.temp >= 10 && result.main.temp < 20) {
          document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1532178910-7815d6919875?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYXRoZXIlMjBjbG91ZHklMjBjb29sfGVufDB8fDB8fHww')";
        } else if (result.main.temp >= 0 && result.main.temp < 10) {
          document.body.style.backgroundImage =
            "url('https://cdn.pixabay.com/photo/2013/10/27/17/14/snowfall-201496_1280.jpg')";
        } else {
          document.body.style.backgroundImage =
            "url('https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdlYXRoZXIlMjBzbm93eSUyMGZyZWV6aW5nfGVufDB8fDB8fHww')";
        }
        settext("");
        setlocation(result.name);
      } catch (error) {
        console.error("Failed to fetch:", error);
        setlocation("Location");
        settemp("?");
        settext("");
      }
    }
  };

  return (
    <>
      <SearchBar change={handlechange} enter={handleclick} text={text} />
      <WeatherCard location={location} temp={temp} country={country} />
    </>
  );
}

export default App;