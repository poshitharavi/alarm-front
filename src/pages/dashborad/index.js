import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import DashboardGauge from "../../components/DashboardGauge";

import Breadcrumbs from "../../layout/breadcrumb";
import GetService from "../../service/GetService";

const Dashboard = () => {
  const [alarms, setAlarms] = useState([]);

  const history = useHistory();

  useEffect(() => {
    //run get all alarms
    const getAllAlarms = async () => {
      await fetchAllAlarms();
    };

    const interval = setInterval(() => {
      getAllAlarms();
      console.log("a");
    }, 15000);

    //run on form load
    getAllAlarms();

    return () => clearInterval(interval);
  }, []);

  /* *
   * get all alarms form API and set to alarms
   * */
  const fetchAllAlarms = async () => {
    GetService("alarm/getAllAlamCount").then((result) => {
      if (result.status === undefined) {
        setAlarms(result);
      } else {
        console.log(result.message);
        toast.error("Error! Alarms Not Found ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  /**
   * Open Sites Page
   */
  const openSites = (alarm) => {
    history.push({
      pathname: "/sites",
      state: {
        alarm: alarm,
      },
    });
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row>
          {alarms.length > 0
            ? alarms.map((alarm, index) => (
                <DashboardGauge
                  key={index}
                  alarm={alarm}
                  onClickCard={openSites}
                />
              ))
            : ""}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
