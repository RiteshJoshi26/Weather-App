const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const API = async (location) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
