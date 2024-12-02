import "./footer.styles.scss";
import linkedIcon from "../../assets/icons/linked-icon.png";


const Footer = () => {
  const handleGoToLinked = () => {
    window.open("https://www.linkedin.com/in/nhan-truong-b56017165/");
  };


  return (
    <div className="footer">
      <hr className="solid" />

      <div className="info-container">
        <div className="info-field">
          <h3>Phone</h3>
          <p>+84 772 0505 98</p>
        </div>
        <div className="info-field">
          <h3>Email</h3>
          <p>nhantruong1298@gmail.com</p>
        </div>
        <div className="info-field">
          <h3>Follow Me</h3>
          <img
            onClick={handleGoToLinked}
            className="social-icon"
            src={linkedIcon}
            alt="linked-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
