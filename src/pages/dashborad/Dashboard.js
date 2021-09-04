import { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Breadcrumbs from "../../layout/breadcrumb";

const Dashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update"></Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
