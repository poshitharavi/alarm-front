import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import DashboardClock from "../../components/DashboardClock";

import Breadcrumbs from "../../layout/breadcrumb";

const Dashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row>
          <DashboardClock time="01:00" location="Location 1" />
          <DashboardClock time="03:00" location="Location 1" />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
