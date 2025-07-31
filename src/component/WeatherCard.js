export default function WeatherCard({ location, country, temp }) {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="weather-card">
        <div className="info">
          <div className="location">
            {location} {country}
          </div>
          <div className="date">{currentDate}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{temp} &deg;C</div>
          <div className="weather">Weather</div>
        </div>
      </div>
    </>
  );
}
