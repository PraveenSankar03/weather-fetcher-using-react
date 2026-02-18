import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="intro">Hi, I'm Praveen.</h1>
      <p>
        I'm a Web developer. I've did this little fun project to learn more about React and APIs.
      </p>
      <p>
        Please Check out my GitHub profile.
      </p>
      <br></br>
      <h1>About Weather.io</h1>
      <p>
        <ul className="info">
          <li>
            This little weather app is a fun personal project I built to explore
            working with APIs and get more hands-on experience with React.
          </li>
          <li>
            I wanted something practical but not overly serious but just a
            clean, simple way to search for a city and see real-time weather
            data.
          </li>
          <li>
            Along the way, I learned how to handle API requests, manage state,
            deal with edge cases (like cities that don't exist), and connect
            multiple data sources together.
          </li>
          <li>
            It's mostly an experiment, partly a learning playground, and
            entirely something I enjoyed building.
          </li>
        </ul>
      </p>
      <br></br>
      <h1>WorkFlow</h1>
      <p>
        <ul className="info">
          <li>
            Since the Open-Meteo API requires latitude and longitude instead of
            a city name, the workflow happens in two steps.
          </li>
          <li>
            First, when a user enters a city, the app sends a request to a
            Geocoding API. That API translates the city name into geographic
            coordinates (latitude and longitude)
          </li>
          <li>
            Once those coordinates are returned, the app uses them to make a
            second request. this time to the Open-Meteo API, to fetch the actual
            weather data.
          </li>
          <li>
            So essentially, the app acts like a translator: it converts a
            human-friendly city name into precise coordinates, then uses those
            coordinates to retrieve accurate weather information.
          </li>
          <li>
            It's a simple two-step chain, but it was a great exercise in working
            with sequential API calls and handling asynchronous data flow in
            React.
          </li>
        </ul>
      </p>
      <br></br>
      <h1>Tech Stack</h1>
      <p>
        <ul className="info">
          <li>
            This project is built with React using functional components and
            Hooks for state management. Client-side routing is handled with
            React Router DOM to navigate between pages without reloading.
          </li>
          <li>
            Weather data is fetched from the Open-Meteo API, while city
            coordinates are resolved using a Geocoding API.
          </li>
          <li>
            API communication is handled using the native Fetch API, and styling
            is done with Bootstrap for a simple, responsive layout.
          </li>
          <li>
            Overall, the stack is intentionally lightweight focused on
            understanding API integration, asynchronous data flow, and clean
            component-based architecture.
          </li>
        </ul>
      </p>
      <h1 className="end">Thanks !</h1>
    </div>
  );
};

export default About;
