import './Search.css';

const Search = ({ weather, error }) => {

  if (error) return <h2 className="topic">{error}</h2>;
  if (!weather) return <h2 className="topic">Loading...</h2>;

  return (
    <div>
      <div className="details">
        <h1>City: {weather.city}, {weather.country}.</h1>
        <h4>Temperature: {weather.temperature}°C</h4>
        <h4>Wind speed: {weather.wind} km/h</h4>
        <h4>latitude: {weather.latitude}</h4>
        <h4>longitude: {weather.longitude}</h4>
      </div>
    </div>
  );
};
export default Search;