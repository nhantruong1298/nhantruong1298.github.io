import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import Footer from "../../components/footer/footer.component";

import { useMediaQuery } from "react-responsive";

import "./navigation.styles.scss";

const Navigation = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Fragment>
      {/* <div className="navigation">
        <Link className="logo-container" to="/">
          {
            <div className="name">
              {isDesktopOrLaptop && "Nhan Truong"}
              {isTabletOrMobile && "NhanTr"}
            </div>
          }
        </Link>
        <div className="nav-links-container">
          <Link to="resume">
            <div className="nav-link">Resume</div>
          </Link>
          <div className="vertical-divider"></div>
          <Link to="projects">
            <div className="nav-link">Projects</div>
          </Link>
          <div className="vertical-divider"></div>
          <Link to="contact">
            <div className="nav-link">Contact</div>
          </Link>
        </div>
      </div> */}
      <Outlet />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Navigation;
