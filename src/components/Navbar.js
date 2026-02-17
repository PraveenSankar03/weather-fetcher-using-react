import './Navbar.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ city, SetCity, fetchWeather }) => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-bs-theme", "dark");
    } else {
      document.body.setAttribute("data-bs-theme", "light");
    }
  },[darkMode]);

  const navigate = useNavigate();

  const updateCity = (e) => {
    SetCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    await fetchWeather();
    navigate("/search");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Weather.io
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <button
              type="button"
              className="btn btn-outline-secondary ms-3"
              onClick={toggleTheme}
            >
              {darkMode ? "Light mode" : "Dark mode"}
            </button>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={city}
              onChange={updateCity}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
