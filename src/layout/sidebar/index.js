import { Fragment, useState } from "react";
import { ArrowLeft, Grid } from "react-feather";
import { Link } from "react-router-dom";
import { translate } from "react-switch-lang";

import logo from "../../assets/images/logo/logo.png";
import logoIcon from "../../assets/images/logo/logo-icon.png";
import { MENUITEMS } from "./menu";
import configDB from "../../data/customizer/config";

const Sidebar = (props) => {
  const [sidebartoogle, setSidebartoogle] = useState(false);
  const [margin, setMargin] = useState(0);
  const [width, setWidth] = useState(0);
  const wrapper = configDB.data.settings.sidebar.type;

  const activeClass = () => {
    document.querySelector(".sidebar-link").classList.add("active");
    document.querySelector(".bg-overlay1").classList.add("active");
  };

  const toggletNavActive = (item) => {
    if (window.innerWidth <= 991) {
      document.querySelector(".page-header").className =
        "page-header close_icon";
      document.querySelector(".sidebar-wrapper").className =
        "sidebar-wrapper close_icon ";
      document
        .querySelector(".mega-menu-container")
        .classList.remove("d-block");
      if (item.type === "sub") {
        document.querySelector(".page-header").className = "page-header ";
        document.querySelector(".sidebar-wrapper").className =
          "sidebar-wrapper ";
      }
    }

    if (!item.active) {
      MENUITEMS.map((a) => {
        a.Items.filter((Items) => {
          if (a.Items.includes(item)) Items.active = false;
          if (!Items.children) return false;
          Items.children.forEach((b) => {
            if (Items.children.includes(item)) {
              b.active = false;
            }
            if (!b.children) return false;
            b.children.forEach((c) => {
              if (b.children.includes(item)) {
                c.active = false;
              }
            });
          });
          return Items;
        });
        return a;
      });
    }
    item.active = !item.active;
  };

  const setNavActive = (item) => {
    MENUITEMS.map((menuItems) => {
      menuItems.Items.filter((Items) => {
        if (Items !== item) {
          Items.active = false;
          document.querySelector(".bg-overlay1").classList.remove("active");
        }
        if (Items.children && Items.children.includes(item)) {
          Items.active = true;
          document.querySelector(".sidebar-link").classList.add("active");
        }
        if (Items.children) {
          Items.children.filter((submenuItems) => {
            if (submenuItems.children && submenuItems.children.includes(item)) {
              Items.active = true;
              submenuItems.active = true;
              return true;
            } else {
              return false;
            }
          });
        }
        return Items;
      });
      return menuItems;
    });
    item.active = !item.active;
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

  const responsiveSidebar = () => {
    document.querySelector(".page-header").className = "page-header close_icon";
    document.querySelector(".sidebar-wrapper").className =
      "sidebar-wrapper close_icon";
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
          <Link to={`/dashboard/`}>
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
          <Link to={`/dashboard/`}>
            <img className="img-fluid" src={logoIcon} alt="" />
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
              {MENUITEMS.map((Item, i) => (
                <Fragment key={i}>
                  <li className="sidebar-main-title">
                    <div>
                      <h6 className="lan-1">{props.t(Item.menutitle)}</h6>
                      <p className="lan-2">{props.t(Item.menucontent)}</p>
                    </div>
                  </li>
                  {Item.Items.map((menuItem, i) => (
                    <li className="sidebar-list" key={i}>
                      {menuItem.type === "sub" ? (
                        <a
                          href="javascript"
                          className={`sidebar-link sidebar-title ${
                            menuItem.active ? activeClass() : ""
                          }`}
                          onClick={(event) => {
                            event.preventDefault();
                            setNavActive(menuItem);
                          }}
                        >
                          <menuItem.icon />
                          <span>{props.t(menuItem.title)}</span>
                          {menuItem.badge ? (
                            <label className={menuItem.badge}>
                              {menuItem.badgetxt}
                            </label>
                          ) : (
                            ""
                          )}
                          <div className="according-menu">
                            {menuItem.active ? (
                              <i className="fa fa-angle-down"></i>
                            ) : (
                              <i className="fa fa-angle-right"></i>
                            )}
                          </div>
                        </a>
                      ) : (
                        ""
                      )}

                      {menuItem.type === "link" ? (
                        <Link
                          to={menuItem.path + "/"}
                          className={`sidebar-link sidebar-title link-nav  ${
                            menuItem.active ? "active" : ""
                          }`}
                          onClick={() => toggletNavActive(menuItem)}
                        >
                          <menuItem.icon />
                          <span>{props.t(menuItem.title)}</span>
                          {menuItem.badge ? (
                            <label className={menuItem.badge}>
                              {menuItem.badgetxt}
                            </label>
                          ) : (
                            ""
                          )}
                        </Link>
                      ) : (
                        ""
                      )}

                      {menuItem.children ? (
                        <ul
                          className="sidebar-submenu"
                          style={
                            menuItem.active
                              ? sidebartoogle
                                ? {
                                    opacity: 1,
                                    transition: "opacity 500ms ease-in",
                                  }
                                : { display: "block" }
                              : { display: "none" }
                          }
                        >
                          {menuItem.children.map((childrenItem, index) => {
                            return (
                              <li key={index}>
                                {childrenItem.type === "sub" ? (
                                  <a
                                    href="javascript"
                                    className={`${
                                      childrenItem.active ? "active" : ""
                                    }`}
                                    onClick={(event) => {
                                      event.preventDefault();
                                      toggletNavActive(childrenItem);
                                    }}
                                  >
                                    {props.t(childrenItem.title)}
                                    <span className="sub-arrow">
                                      <i className="fa fa-chevron-right"></i>
                                    </span>
                                    <div className="according-menu">
                                      {childrenItem.active ? (
                                        <i className="fa fa-angle-down"></i>
                                      ) : (
                                        <i className="fa fa-angle-right"></i>
                                      )}
                                    </div>
                                  </a>
                                ) : (
                                  ""
                                )}

                                {childrenItem.type === "link" ? (
                                  <Link
                                    to={childrenItem.path + "/"}
                                    className={`${
                                      childrenItem.active ? "active" : ""
                                    }`}
                                    onClick={() =>
                                      toggletNavActive(childrenItem)
                                    }
                                  >
                                    {props.t(childrenItem.title)}
                                  </Link>
                                ) : (
                                  ""
                                )}

                                {childrenItem.children ? (
                                  <ul
                                    className="nav-sub-childmenu submenu-content"
                                    style={
                                      childrenItem.active
                                        ? { display: "block" }
                                        : { display: "none" }
                                    }
                                  >
                                    {childrenItem.children.map(
                                      (childrenSubItem, key) => (
                                        <li key={key}>
                                          {childrenSubItem.type === "link" ? (
                                            <Link
                                              to={childrenSubItem.path + "/"}
                                              className={`${
                                                childrenSubItem.active
                                                  ? "active"
                                                  : ""
                                              }`}
                                              onClick={() =>
                                                toggletNavActive(
                                                  childrenSubItem
                                                )
                                              }
                                            >
                                              {props.t(childrenSubItem.title)}
                                            </Link>
                                          ) : (
                                            ""
                                          )}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                ) : (
                                  ""
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default translate(Sidebar);
