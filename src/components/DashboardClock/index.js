import { useState } from "react";
import { Card, Col } from "reactstrap";
import Clock from "react-clock";

const DashboardClock = ({ time, location }) => {
  return (
    <>
      <Col xl="3" sm="6" className="xl-50 box-col-6">
        <Card>
          <div className="mobile-clock-widget bg-primary">
            <div>
              <Clock className={"clock"} value={time} />
              <div id="date" className="date f-24 mb-2">
                <span>{location}</span>
              </div>
              <div>
                <p className="m-0 f-14 text-light">{time}</p>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default DashboardClock;
