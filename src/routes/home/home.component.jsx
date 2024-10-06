import "./home.styles.scss";

import { useNavigate } from "react-router-dom";

import avatar from "../../assets/images/avatar.JPG";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

const Home = () => {
  const navigate = useNavigate();

  const handleGoToResume = () => {
    navigate("resume");
  };

  const handleGoToProjects = () => {
    navigate("projects");
  };

  const handleGoToContact = () => {
    navigate("contact");
  };

  return (
    <div className="home-container">
      <div className="avatar-container">
        <img className="avatar" src={avatar} alt="my-avatar" />
      </div>

      {/* <img className="avatar" src={avatar} alt="my-avatar" /> */}
      <div className="info-container">
        <h1>Hello</h1>
        <h2>A Bit About Me</h2>
        <div className="about-me">
          {`I am a reassionate and dedicated Flutter developer 
with three years of experience, I am excited to contribute
my skills and knowledge to a dynamic team where I can continue
to grow and learn while developing high-quality mobile applications.`}
        </div>

        <div className="buttons-container">
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleGoToResume}
          >
            Resume
          </Button>

          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleGoToProjects}
          >
            Projects
          </Button>

          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleGoToContact}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
