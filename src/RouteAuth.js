import { Fragment } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./layout/footer";
import Header from "./layout/header";
import Loader from "./layout/loader";
import Sidebar from "./layout/sidebar";
import Taptop from "./layout/tap-top";

// import Auth from "./Auth";

const RouteAuth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (Auth.isAuthenticated()) {
        return (
          <Fragment>
            <Loader />
            <Taptop />
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
              <Header />
              <div className="page-body-wrapper">
                <Sidebar />
                <div className="page-body">
                  <Component {...props} />
                </div>
                <Footer />
              </div>
            </div>
            <ToastContainer />
          </Fragment>
        );
        // } else {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/login",
        //         state: props.location,
        //       }}
        //     />
        //   );
        // }
      }}
    />
  );
};

export default RouteAuth;
