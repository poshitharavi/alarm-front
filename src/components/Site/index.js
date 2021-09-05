import { Clock } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import Moment from "react-moment";

const Site = ({ site, onClickSiteCard }) => {
  return (
    <>
      <Col sm="12" xl="6">
        <Card
          className="card-absolute "
          onClick={() => onClickSiteCard(site)}
          style={{ cursor: "pointer" }}
        >
          <CardHeader className="bg-primary">
            <h5>{site.site_name}</h5>
          </CardHeader>
          <CardBody className="b-r-4 card-body">
            <div className="media static-top-widget">
              <div className="align-self-center text-center">
                <Clock />
              </div>
              <div className="media-body">
                <span className="m-0">Alarm Time</span>
                <h4 className="mb-0 counter">
                  {site.alarm_time !== "null" ? (
                    <Moment format="YYYY/MM/DD" date={site.alarm_time} />
                  ) : (
                    "00/00/00"
                  )}
                </h4>
                <h4 className="mb-0 counter">
                  {site.alarm_time !== "null" ? (
                    <Moment format="HH:MM" date={site.alarm_time} />
                  ) : (
                    "00:00"
                  )}
                </h4>
                <Clock className="icon-bg" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Site;
