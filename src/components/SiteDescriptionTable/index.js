import { Row, Col, Table } from "reactstrap";
import Moment from "react-moment";

const SiteDescriptionTable = ({ alarmDetails }) => {
  return (
    <>
      <Row>
        <Col sm="12" className="xl-100 box-col-12">
          <div className="user-status table-responsive">
            <Table borderless>
              <thead>
                <tr>
                  <th scope="col">{"Alarm Id"}</th>
                  <th scope="col">{"Alarm"}</th>
                  <th scope="col">{"Date"}</th>
                  <th scope="col">{"Time"}</th>
                </tr>
              </thead>
              <tbody>
                {alarmDetails.map((data, index) => (
                  <tr key={index}>
                    <td className="digits">{data.alarm_id}</td>
                    <td>{data.alarm_description}</td>
                    <td>
                      <Moment format="YYYY/MM/DD" date={data.alarm_time} />
                    </td>
                    <td>
                      <Moment format="HH:MM" date={data.alarm_time} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SiteDescriptionTable;
