import './Search.css';

const Search = ({ weather, error }) => {

  if (error) return <h2 className="topic">{error}</h2>;
  if (!weather) return <h2 className="topic">Loading...</h2>;

  return (
    <div>
      <div className="details">
        <h1>City: {weather.city}, {weather.country}</h1>
        <h3>Temperature: {weather.temperature}°C</h3>
        <h4>Wind: {weather.wind} km/h</h4>
      </div>
    </div>
  );
};
export default Search;