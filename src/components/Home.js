import './Home.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <div>
        <h1 className="topic">Welcome to weather.io</h1>
        <h4 className="sub-topic">find the current weather of cities. Search it in the Search Bar.</h4>
    </div>
    <div>
      <h4 className='contact'>Contact Me:</h4>
        <div className="social-icons">
          <Link to="https://github.com/PraveenSankar03"
          target='blank'>
            <FaGithub />
          </Link>
          <Link to="mailto:praveensankar3333@gmail.com">
            <FaEnvelope />
          </Link>
        </div>
    </div>
    </>
  );
};

export default Home;