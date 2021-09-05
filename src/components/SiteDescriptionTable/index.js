import { Row, Col, Table } from "reactstrap";

const cartProducts = [];

const SiteDescriptionTable = () => {
  return (
    <>
      <Row>
        <Col sm="12" className="xl-100 box-col-12">
          <div className="user-status table-responsive">
            <Table borderless>
              <thead>
                <tr>
                  <th scope="col">{"Details"}</th>
                  <th scope="col">{"Quantity"}</th>
                  <th scope="col">{"Status"}</th>
                  <th scope="col">{"Price"}</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((data) => (
                  <tr key={data.details}>
                    <td>{data.details}</td>
                    <td className="digits">{data.qty}</td>
                    <td className={`font-${data.statusColor}`}>
                      {data.status}
                    </td>
                    <td>
                      <div
                        className={`span badge badge-pill ${data.className}`}
                      >
                        {data.price}
                      </div>
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
