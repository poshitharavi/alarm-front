import { Fragment, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Site from "../../components/Site";

import Breadcrumbs from "../../layout/breadcrumb";

const Sites = (props) => {
  console.log(props.location.state.alarmId);

  useEffect(() => {}, []);

  const fetchSiteDetails = async () => {};

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
