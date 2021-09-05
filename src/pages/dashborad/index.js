import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import DashboardClock from "../../components/DashboardClock";

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

    //run on form load
    getAllAlarms();
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
  const openSites = (id) => {
    history.push({
      pathname: "/sites",
      state: {
        alarmId: id,
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
                <DashboardClock
                  key={index}
                  alarm={alarm}
                  time={`${Math.floor(Math.random() * 24)}:${
                    Math.floor(Math.random() * (60 - 10 + 1)) + 10 //calculate random time
                  }`}
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
