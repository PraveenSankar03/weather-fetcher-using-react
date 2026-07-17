import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div>
    <div>
        <h1 className="topic">Welcome to weather.io</h1>
        <h4 className="sub-topic">Find the current weather of cities. Search it in the Search Bar.</h4>
    </div>
    <div>
      <h4 className='contact'>Contact Me:</h4>
        <div className="social-icons">
          <a href="https://github.com/PraveenSankar03"
          target='blank'>
            <FaGithub />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=praveensankar3333@gmail.com" target='blank'>
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/praveen-kumar-40109b366/" target='blank'>
            <FaLinkedin />
          </a>
        </div>
    </div>
    </div>
  );
};

export default Home;