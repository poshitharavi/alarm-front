import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./layout/footer";
import Loader from "./layout/loader";

// import Auth from "./Auth";
// import Loader from "../src/layout/loader";
// import Taptop from "../src/layout/tap-top";
// import Header from "../src/layout/header";
// import Sidebar from "../src/layout/sidebar";
// import Footer from "../src/layout/footer";

const RouteAuth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (Auth.isAuthenticated()) {
        return (
          <Fragment>
            <Loader />
            {/* <Taptop /> */}
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
              {/* <Header /> */}
              <div className="page-body-wrapper">
                {/* <Sidebar /> */}
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
