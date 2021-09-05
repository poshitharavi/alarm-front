import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Grid } from "react-feather";
import { useHistory } from "react-router";

import configDB from "../../data/customizer/config";
import logo from "../../assets/images/logo/logo.png";
import miniLogo from "../../assets/images/logo/logo-icon.png";
import GetService from "../../service/GetService";
import SideBarItem from "../../components/SideBarItems";

const Sidebar = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  const [margin, setMargin] = useState(0);
  const [width, setWidth] = useState(0);
  const [sidebartoogle, setSidebartoogle] = useState(true);
  const wrapper = configDB.data.settings.sidebar.type;
  const history = useHistory();

  useEffect(() => {
    //run get all alarms
    const getMenuItems = async () => {
      await fetchMenuItems();
    };

    //run on form load
    getMenuItems();

    document.querySelector(".left-arrow").classList.add("d-none");
    window.addEventListener("resize", handleResize);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchMenuItems = async () => {
    GetService(`site/getAll`).then((result) => {
      if (result.status === 1) {
        if (result.site_list.length > 0) {
          setMenuItems(result.site_list);
        }
      } else {
        console.log(result.message);
      }
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 400) {
      if (
        configDB.data.settings.sidebar.type.split(" ").pop() ===
          "material-type" ||
        configDB.data.settings.sidebar.type.split(" ").pop() ===
          "advance-layout"
      )
        document.querySelector(".sidebar-main").className =
          "sidebar-main hovered";
    } else {
      if (document.getElementById("sidebar-main"))
        document.querySelector(".sidebar-main").className = "sidebar-main";
    }
  };

  const handleResize = () => {
    setWidth(window.innerWidth - 500);
  };

  const scrollToRight = () => {
    if (margin <= -2598 || margin <= -2034) {
      if (width === 492) {
        setMargin(-3570);
      } else {
        setMargin(-3464);
      }
      document.querySelector(".right-arrow").classList.add("d-none");
      document.querySelector(".left-arrow").classList.remove("d-none");
    } else {
      setMargin((margin) => (margin += -width));
      document.querySelector(".left-arrow").classList.remove("d-none");
    }
  };

  const scrollToLeft = () => {
    if (margin >= -width) {
      setMargin(0);
      document.querySelector(".left-arrow").classList.add("d-none");
      document.querySelector(".right-arrow").classList.remove("d-none");
    } else {
      setMargin((margin) => (margin += width));
      document.querySelector(".right-arrow").classList.remove("d-none");
    }
  };

  const closeOverlay = () => {
    document.querySelector(".bg-overlay1").classList.remove("active");
    document.querySelector(".sidebar-link").classList.remove("active");
  };

  const openCloseSidebar = (toggle) => {
    if (toggle) {
      setSidebartoogle(!toggle);
      document.querySelector(".page-header").className =
        "page-header close_icon";
      document.querySelector(".sidebar-wrapper").className =
        "sidebar-wrapper close_icon ";
    } else {
      setSidebartoogle(!toggle);
      document.querySelector(".page-header").className = "page-header";
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
    }
  };

  const responsiveSidebar = () => {
    document.querySelector(".page-header").className = "page-header close_icon";
    document.querySelector(".sidebar-wrapper").className =
      "sidebar-wrapper close_icon";
  };

  return (
    <Fragment>
      <div
        className={`bg-overlay1`}
        onClick={() => {
          closeOverlay();
        }}
      ></div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <div className="logo-wrapper">
          <Link to={`/`}>
            <img className="img-fluid for-light" src={logo} alt="" />
          </Link>
          <div className="back-btn" onClick={() => responsiveSidebar()}>
            <i className="fa fa-angle-left"></i>
          </div>
          <div
            className="toggle-sidebar"
            onClick={() => openCloseSidebar(sidebartoogle)}
          >
            <Grid className="status_toggle middle sidebar-toggle" />
          </div>
        </div>
        <div className="logo-icon-wrapper">
          <Link to={`/`}>
            <img className="img-fluid" src={miniLogo} alt="" />
          </Link>
        </div>
        <nav className="sidebar-main" id="sidebar-main">
          <div className="left-arrow" onClick={scrollToLeft}>
            <ArrowLeft />
          </div>
          <div
            id="sidebar-menu"
            style={
              wrapper.split(" ").includes("horizontal-wrapper")
                ? { marginLeft: margin + "px" }
                : { margin: "0px" }
            }
          >
            <ul className="sidebar-links custom-scrollbar">
              <li className="back-btn">
                <div className="mobile-back text-right">
                  <span>{"Back"}</span>
                  <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                </div>
              </li>
              <Fragment>
                <li
                  className="sidebar-main-title"
                  onClick={() => history.push("/")}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <h6 className="lan-1">{"Dashboard"}</h6>
                  </div>
                </li>
                {menuItems.length > 0
                  ? menuItems.map((item, index) => (
                      <SideBarItem key={index} item={item} />
                    ))
                  : ""}
              </Fragment>
            </ul>
          </div>
          <div className="right-arrow" onClick={scrollToRight}>
            <ArrowRight />
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidebar;
