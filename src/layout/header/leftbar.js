import { Fragment, useState, useLayoutEffect } from "react";
import { Col } from "reactstrap";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { Sliders } from "react-feather";

const Leftbar = () => {
  const [sidebartoggle, setSidebartoggle] = useState(true);
  const width = useWindowSize();

  //get window size
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const responsive_openCloseSidebar = (toggle) => {
    if (width <= 991) {
      document.querySelector(".page-header").className = "page-header";
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
    } else {
      if (toggle) {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className =
          "page-header close_icon";
        document.querySelector(".sidebar-wrapper").className =
          "sidebar-wrapper close_icon ";
        document
          .querySelector(".mega-menu-container")
          .classList.remove("d-block");
      } else {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header";
        document.querySelector(".sidebar-wrapper").className =
          "sidebar-wrapper ";
      }
    }
  };

  return (
    <Fragment>
      <div className="header-logo-wrapper" id="out_side_click">
        <div className="logo-wrapper">
          <Link to={`/dashboard/`}>
            <img className="img-fluid for-light" src={logo} alt="" />
          </Link>
        </div>
        <div
          className="toggle-sidebar"
          onClick={() => responsive_openCloseSidebar(sidebartoggle)}
          style={
            window.innerWidth <= 991
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <Sliders
            className="status_toggle middle sidebar-toggle"
            id="sidebar-toggle"
          />
        </div>
      </div>
      <Col className="left-header horizontal-wrapper pl-0">
        <ul className="horizontal-menu"></ul>
      </Col>
    </Fragment>
  );
};

export default Leftbar;
