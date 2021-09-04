import { Fragment } from "react";
import { Row } from "reactstrap";
import Leftbar from "./leftbar";
import Rightbar from "./rightbar";

const Header = () => {
  return (
    <Fragment>
      <div className="page-header">
        <Row className="header-wrapper m-0">
          <Leftbar />
          <Rightbar />
        </Row>
      </div>
    </Fragment>
  );
};

export default Header;
