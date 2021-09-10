import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
import SiteDiscriptionHistoryTable from "../../components/SiteDiscriptionHistoryTable";

import Breadcrumbs from "../../layout/breadcrumb";
import GetService from "../../service/GetService";

const SiteDescription = (props) => {
  const siteId = props.match.params.id;
  const site = props.location.state.site;
  const [acitiveTabLine, setAcitiveTabLine] = useState("1");
  const [activeAlarmDetails, setActiveAlarmDetails] = useState([]);
  // eslint-disable-next-line
  const [hisoryAlarmDetails, setHisoryAlarmDetails] = useState([]);

  useEffect(() => {
    const getAlarmDetails = async (id) => {
      await fetchActiveAlarmDetails(id);
      // await fetchHistoryAlarmDetails(id);
    };

    getAlarmDetails(siteId);
  }, [site, siteId]);

  const fetchActiveAlarmDetails = async (id) => {
    GetService(`alarm/getAlamsBySite/${id}`).then((result) => {
      if (result.status === undefined) {
        console.log(result);
        setActiveAlarmDetails(result);
      } else {
        console.log(result.message);
        toast.error("Error! Alarms Not Found ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  // eslint-disable-next-line
  const fetchHistoryAlarmDetails = async (id) => {
    GetService(`alarm/getAlamsHistoryBySite/${id}`).then((result) => {
      if (result.status === undefined) {
        setHisoryAlarmDetails(result);
      } else {
        console.log(result.message);
        toast.error("Error! Alarms Not Found ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Sites" title={`${site.site_name} - Site`} />
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
                          className={acitiveTabLine === "1" ? "active" : ""}
                          onClick={() => setAcitiveTabLine("1")}
                        >
                          {"Live"}
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
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
                        {activeAlarmDetails.length > 0 ? (
                          <SiteDescriptionTable
                            alarmDetails={activeAlarmDetails}
                          />
                        ) : (
                          <p>No history data found</p>
                        )}
                      </TabPane>
                      <TabPane tabId="2">
                        {hisoryAlarmDetails.length > 0 ? (
                          <SiteDiscriptionHistoryTable
                            alarmDetails={hisoryAlarmDetails}
                          />
                        ) : (
                          <p>No history data found</p>
                        )}
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
