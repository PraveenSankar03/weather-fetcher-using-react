import { FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <>
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
        </div>
    </div>
    </>
  );
};

export default Home;