import { Fragment, useState } from "react"; // eslint-disable-next-line
import { Bell, FileText, LogIn, Mail, User } from "react-feather"; // eslint-disable-next-line
import { useHistory } from "react-router-dom";

import man from "../../assets/images/dashboard/profile.jpg";

import Auth from "../../Auth";

const Rightbar = () => {
  // eslint-disable-next-line
  const [name, setName] = useState(localStorage.getItem("Name")); // eslint-disable-next-line
  const [notificationDropDown, setNotificationDropDown] = useState(false); // eslint-disable-next-line

  const history = useHistory();

  // const UserMenuRedirect = (redirect) => {
  //   history.push(redirect);
  // };

  const logoutUser = () => {
    Auth.logout(() => {
      sessionStorage.clear();
      history.push("/login");
    });
  };

  return (
    <Fragment>
      <div className="nav-right col-8 pull-right right-header p-0">
        <ul className="nav-menus">
          {/* <li className="onhover-dropdown">
            <div
              className="notification-box"
              onClick={() => setNotificationDropDown(!notificationDropDown)}
            >
              <Bell />
              <span className="badge badge-pill badge-secondary">2</span>
            </div>
            <ul
              className={`notification-dropdown onhover-show-div ${
                notificationDropDown ? "active" : ""
              }`}
            >
              <li>
                <Bell />
                <h6 className="f-18 mb-0">{"Notification"}</h6>
              </li>
              <li>
                <p>
                  <i className="fa fa-circle-o mr-3 font-primary"> </i>
                  {"DeliveryProcessing"}{" "}
                  <span className="pull-right">{"10 min."}</span>
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-circle-o mr-3 font-success"></i>
                  {"OrderComplete"}
                  <span className="pull-right">{"1 hr"}</span>
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-circle-o mr-3 font-info"></i>
                  {"TicketsGenerated"}
                  <span className="pull-right">{"3 hr"}</span>
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-circle-o mr-3 font-danger"></i>
                  {"DeliveryComplete"}
                  <span className="pull-right">{"6 hr"}</span>
                </p>
              </li>
              <li>
                <button className="btn btn-primary">
                  {"CheckAllNotification"}
                </button>
              </li>
            </ul>
          </li> */}
          <li className="profile-nav onhover-dropdown p-0">
            <div className="media profile-media">
              <img className="b-r-10" src={man} alt="" />
              <div className="media-body">
                <span>{name}</span>
                <p className="mb-0 font-roboto">
                  {"user"} <i className="middle fa fa-angle-down"></i>
                </p>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
              {/* <li onClick={() => UserMenuRedirect(``)}>
                <User />
                <span>{"Account"} </span>
              </li>
              <li onClick={() => UserMenuRedirect(``)}>
                <Mail />
                <span>{"Inbox"}</span>
              </li>
              <li onClick={() => UserMenuRedirect(``)}>
                <FileText />
                <span>{"Taskboard"}</span>
              </li> */}
              <li onClick={logoutUser}>
                <LogIn />
                <span>{"LogOut"}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Rightbar;
