import { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import SiteDescriptionTable from "../../components/SiteDescriptionTable";

import Breadcrumbs from "../../layout/breadcrumb";

const SiteDescription = () => {
  const [acitiveTabLine, setAcitiveTabLine] = useState("1");

  return (
    <Fragment>
      <Breadcrumbs parent="Sites" title="Site Description" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="3" className="tabs-responsive-side">
                    <Nav className="flex-column nav-pills border-tab nav-left">
                      <NavItem>
                        <NavLink
                          href="#javascript"
                          className={acitiveTabLine === "1" ? "active" : ""}
                          onClick={() => setAcitiveTabLine("1")}
                        >
                          {"Live"}
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#javascript"
                          className={acitiveTabLine === "2" ? "active" : ""}
                          onClick={() => setAcitiveTabLine("2")}
                        >
                          {"History"}
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col sm="9">
                    <TabContent activeTab={acitiveTabLine}>
                      <TabPane className="fade show" tabId="1">
                        <SiteDescriptionTable />
                      </TabPane>
                      <TabPane tabId="2">
                        <SiteDescriptionTable />
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SiteDescription;
