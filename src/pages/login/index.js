import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
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
import man from "../../assets/images/dashboard/profile.jpg";

const Login = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [togglePassword, setTogglePassword] = useState(false);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
    localStorage.setItem("AuthData", authUser);
    sessionStorage.setItem("AuthData", JSON.stringify(authUser));
    localStorage.setItem("loggedUserDetails", userDetails);
  }, [value, name, authUser, userDetails]);

  const history = useHistory();

  const loginAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    await PostService(`user/login`, {
      user_name: userName,
      password: password,
    }).then((result) => {
      if (result.status === 1) {
        setValue(man);
        setName(result.first_name);
        setAuthUser(true);
        setUserDetails(JSON.stringify(result));
        console.log("session", JSON.parse(sessionStorage.getItem("AuthData")));
        Auth.login(() => {
          history.push(`/`);
        });
      } else {
        console.log(result);
        toast.error(`Error! username or password is incorrect`);
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
                <Form className="theme-form">
                  <h4>{"Sign In"}</h4>
                  <p>{"Enter your username & password to login"}</p>
                  <FormGroup>
                    <Label className="col-form-label">{"Username"}</Label>
                    <Input
                      className="form-control"
                      type="text"
                      defaultValue={userName}
                      required={true}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <Input
                      className="form-control"
                      type={togglePassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      defaultValue={password}
                      required=""
                    />
                    <div
                      className="show-hide"
                      onClick={() => setTogglePassword(!togglePassword)}
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
                      disabled={loading ? loading : loading}
                      onClick={(e) => loginAuth(e)}
                    >
                      {loading ? "LOADING..." : SignIn}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
