import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Site = () => {
  return (
    <>
      <Col sm="12" xl="6">
        <Card className="card-absolute">
          <CardHeader className="bg-primary">
            <h5>{"Site 1"}</h5>
          </CardHeader>
          <CardBody>
            <p>
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
              }
              {
                "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
              }
              {
                "of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"
              }
              {
                "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
              }
              {"unknown printer took a galley of type and scrambled."}
            </p>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Site;
