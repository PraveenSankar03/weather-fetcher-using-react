
// const WeatherCard = ({obj}) => {
//     return(
//         <div>
//             <h4>temperature:{obj.tempertaure_2m}</h4>
//             <h4>wind:{obj.wind_speed_10m}</h4>
//         </div>
//     )
// }

// const Search = ({city, weather}) => {
//     const title = {city}
//     // const results = weather.map((obj,i) => {
//     //     return <WeatherCard obj={obj} key={i} />;
//     // });

//     return (
//         <div>
//             {title}
//         </div>
//     )
// }

const Search = ({ weather, error }) => {

  if (error) return <h2>{error}</h2>;
  if (!weather) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{weather.city}, {weather.country}</h1>
      <h3>{weather.temperature}°C</h3>
      <h4>Wind: {weather.wind} km/h</h4>
    </div>
  );
};
export default Search;