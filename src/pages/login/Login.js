import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  TabContent,
  TabPane,
} from "reactstrap";
import {
  Password,
  SignIn,
  EmailAddress,
  RememberPassword,
  ForgotPassword,
} from "../../constant";

const Login = (props) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };

  return (
    <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="#javascript">
                  <img
                    className="img-fluid for-light"
                    src={require("../../assets/images/logo/login.png")}
                    alt=""
                  />
                  <img
                    className="img-fluid for-dark"
                    src={require("../../assets/images/logo/logo_dark.png")}
                    alt=""
                  />
                </a>
              </div>
              <div className="login-main login-tab">
                <TabContent activeTab="1" className="content-login">
                  <TabPane className="fade show" tabId="1">
                    <Form className="theme-form">
                      <h4>{"Sign In"}</h4>
                      <p>{"Enter your email & password to login"}</p>
                      <FormGroup>
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input
                          className="form-control"
                          type="email"
                          required={true}
                          placeholder="test@gmail.com"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{Password}</Label>
                        <Input
                          className="form-control"
                          type={togglePassword ? "text" : "password"}
                          name="login[password]"
                          value={password}
                          onChange={(e) => handleChange(e)}
                          required={true}
                          placeholder="*********"
                        />
                        <div
                          className="show-hide"
                          onClick={() => HideShowPassword(togglePassword)}
                        >
                          <span className={togglePassword ? "" : "show"}></span>
                        </div>
                      </FormGroup>
                      <div className="form-group mb-0">
                        <div className="checkbox ml-3">
                          <Input id="checkbox1" type="checkbox" />
                          <Label className="text-muted" for="checkbox1">
                            {RememberPassword}
                          </Label>
                        </div>
                        <a className="link" href="#javascript">
                          {ForgotPassword}
                        </a>
                        <Button color="primary" className="btn-block">
                          {SignIn}
                        </Button>
                      </div>
                    </Form>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
