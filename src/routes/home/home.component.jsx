import "./home.styles.scss";

import tsImage from "../../assets/images/ts-image.png";
import khImage from "../../assets/images/khmartin-image.png";
import uehImage from "../../assets/images/ueh-image.png";
import kidyImage from "../../assets/images/kidy-image.png";

import linkedIcon from "../../assets/icons/linked-icon.png";
import gitIcon from "../../assets/icons/git-icon.svg";

const Home = () => {
  const aboutMe = `I am a reassionate and dedicated Flutter developer 
with four years of experience, I am excited to contribute
my skills and knowledge to a dynamic team where I can continue
to grow and learn while developing high-quality mobile applications.`;

  const projects = [
    {
      name: "Kidy School",
      description: "Comprehensive preschool management solution",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.twop.kidy_school&pcampaignid=web_share",
        ios: "https://apps.apple.com/vn/app/kidy-school/id6587577623?l=vi",
      },
      image: kidyImage,
    },
    {
      name: "KH Martin",
      description: "Mobile app for Study Promotion Grant Management",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.martin_charity_community",
        ios: "https://testflight.apple.com/join/9qRaV1Jd",
      },
      image: khImage,
    },
    {
      name: "Transwap",
      description:
        "The financial company creates mobile apps for international money transfers, currency exchanges, and credit cards",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.transwap.luna",
        ios: "https://apps.apple.com/app/id1564013302",
      },
      image: tsImage,
    },
    {
      name: "UEH Student",
      description:
        "UEH Official App, integrates student card, manages attendance, and keeps student informed.",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=vn.edu.ueh.student&hl=vi&gl=US",
        ios: "https://apps.apple.com/us/app/ueh-student/id1560073124",
      },
      image: uehImage,
    },
  ];

  const handleGoToLinked = () => {
    window.open("https://www.linkedin.com/in/nhan-truong-b56017165/");
  };

  const handleGoToGithub = () => {
    window.open("https://github.com/nhantruong1298");
  };

  return (
    <div className="home-container">
      <div className="info-container">
        <h1>Welcome to My Portfolio</h1>
        <h2>A Bit About Me</h2>
        <span className="about-me">{aboutMe}</span>
      </div>

      <div className="projects-container">
        <h2 className="label">Projects I have worked on</h2>

        <div className="project-card-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={`${project.name}-image`} />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  Links: &nbsp;
                  <a
                    href={project.links.android}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                  , &nbsp;
                  <a
                    href={project.links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IOS
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <hr className="solid" />

        <div className="footer-info-container">
          <div className="footer-info-field">
            <h3>Follow Me</h3>
            <img
              onClick={handleGoToLinked}
              className="social-icon"
              src={linkedIcon}
              alt="linked-icon"
            />
            <img
              onClick={handleGoToGithub}
              className="social-icon"
              src={gitIcon}
              alt="linked-icon"
            />
          </div>

          <div className="footer-info-field">
            <h3>Email</h3>
            <p>nhantruong1298@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
