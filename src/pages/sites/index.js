import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import Site from "../../components/Site";

import Breadcrumbs from "../../layout/breadcrumb";
import GetService from "../../service/GetService";

const Sites = (props) => {
  const alarm = props.location.state.alarm;
  const [sites, setSites] = useState([]);

  const history = useHistory();

  useEffect(() => {
    //run all sites
    const getAllSites = async (id) => {
      await fetchSiteDetails(id);
    };

    getAllSites(alarm.alarm_id); // eslint-disable-next-line
  }, []);

  const fetchSiteDetails = async (id) => {
    GetService(`alarm/getAlamsById/${id}`).then((result) => {
      if (result.status === undefined) {
        setSites(result);
      } else {
        console.log(result.message);
        toast.error("Error! Alarms Not Found ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  /**
   * Open site details Page
   */
  const openSiteDetails = (site) => {
    history.push({
      pathname: "/site-description",
      state: {
        site: site,
      },
    });
  };

  return (
    <Fragment>
      <Breadcrumbs
        parent="Alarm"
        title={`${alarm.alarm_description} - Sites`}
      />
      <Container fluid={true}>
        <Row>
          {sites.length > 0
            ? sites.map((site, index) => (
                <Site
                  key={index}
                  site={site}
                  onClickSiteCard={openSiteDetails}
                />
              ))
            : ""}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sites;
