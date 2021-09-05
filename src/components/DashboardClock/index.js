import { Card, Col } from "reactstrap";
import Clock from "react-clock";

const DashboardClock = ({ alarm, time, onClickCard }) => {
  return (
    <>
      <Col xl="3" sm="6" className="xl-50 box-col-6">
        <Card>
          <div
            className="mobile-clock-widget "
            onClick={() => onClickCard(alarm)}
            style={{ cursor: "pointer" }}
          >
            <div>
              <Clock className={"clock"} value={time} />
              <div id="date" className="date f-24 mb-2">
                <span>{alarm.alarm_description}</span>
              </div>
              <div>
                <p className="m-0 f-14 text-light">{alarm.alarm_count}</p>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default DashboardClock;
