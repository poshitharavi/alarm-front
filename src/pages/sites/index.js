import { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Site from "../../components/Site";

import Breadcrumbs from "../../layout/breadcrumb";

const Sites = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Alarm" title="Sites" />
      <Container fluid={true}>
        <Row>
          <Site />
          <Site />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sites;
