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
  RememberPassword,
  ForgotPassword,
} from "../../constant";
import logo from "../../assets/images/logo/logo.png";
import PostService from "../../service/PostService";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

import Auth from "../../Auth";

const Login = (props) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [postData, setPostData] = useState({
    user_name: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };

  const process = () => {
    PostService(`user/login`, postData).then((result) => {
      if (result.status === 1) {
        sessionStorage.setItem("alarmUserDetails", JSON.stringify(result));
        Auth.login(() => {
          history.push({
            pathname: "/dashboard",
          });
        });
      } else {
        console.log(result);
        toast.error(`Error! ${result.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  return (
    <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="#javascript">
                  <img className="img-fluid for-light" src={logo} alt="" />
                </a>
              </div>
              <div className="login-main login-tab">
                <TabContent activeTab="1" className="content-login">
                  <TabPane className="fade show" tabId="1">
                    <Form className="theme-form">
                      <h4>{"Sign In"}</h4>
                      <p>{"Enter your username & password to login"}</p>
                      <FormGroup>
                        <Label className="col-form-label">{"Username"}</Label>
                        <Input
                          className="form-control"
                          type="text"
                          value={postData.user_name}
                          required={true}
                          onChange={(e) =>
                            setPostData({
                              ...postData,
                              user_name: e.target.value,
                            })
                          }
                          placeholder="username"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{Password}</Label>
                        <Input
                          className="form-control"
                          type={togglePassword ? "text" : "password"}
                          name="login[password]"
                          value={password}
                          onChange={(e) => {
                            handleChange(e);
                            setPostData({
                              ...postData,
                              password: e.target.value,
                            });
                          }}
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
                        <Button
                          color="primary"
                          className="btn-block"
                          onClick={process}
                        >
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
