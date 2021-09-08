import { Card, Col, Row } from "reactstrap";
import GaugeChart from "react-gauge-chart";

const DashboardGauge = ({ alarm, onClickCard }) => {
  return (
    <>
      <Col xl="4" md="6" className="box-col-12">
        <Card
          className="o-hidden"
          onClick={() => onClickCard(alarm)}
          style={{ cursor: "pointer" }}
        >
          <div className="chart-widget-top">
            <Row className="card-body">
              <Col xs="8">
                <h6 className="f-w-600 font-primary">
                  {alarm.alarm_description}
                </h6>
              </Col>
              <Col xs="4" className="text-right">
                <h4 className="num total-value">
                  <span className="counter">{alarm.alarm_count}</span>
                </h4>
              </Col>
              <Col xs="12">
                <div id="chart-widget1">
                  <GaugeChart
                    nrOfLevels={10}
                    percent={alarm.alarm_percentage / 100}
                    textColor="#4d4d4d"
                    animate={false}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default DashboardGauge;
