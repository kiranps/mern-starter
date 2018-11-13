import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FormItem from "components/FormItem";
import View from "components/View";
import Link from "components/Link";
import Button from "components/Button";
import Icon from "components/Icon";
import {
  Background,
  Heading,
  Form,
  UserName,
  Password,
  LoginBox,
  GoogleSignIn
} from "./Styled";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, username: "", password: "", token: null };
  }

  componentDidMount = () => {
    window.authenticateCallback = function(token) {
      console.log(token);
    };
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    this.props.login({ username, password });
  };

  handleGoogleSignIn = () => {
    window.open("http://localhost:8080/auth/google");
  };

  render() {
    const { loading } = this.state;
    const { authenticated, location } = this.props;
    const { from } = location.state || { from: { pathname: "/h/page1" } };

    if (authenticated) return <Redirect to={from} />;

    return (
      <Background>
        <LoginBox>
          <Form onSubmit={this.handleSubmit}>
            <Heading>Login</Heading>
            <FormItem label="Username" message="">
              <UserName onChange={this.handleChange} />
            </FormItem>
            <FormItem label="Password" message="">
              <Password onChange={this.handleChange} />
            </FormItem>
            <View margin="0 0 4px 0">
              <View.Inline float="center">
                <Link to="/forgot-password">forgot password</Link>
              </View.Inline>
            </View>
            <Button type="submit" label="Submit" loading={loading} />
            <View align="center">or</View>
          </Form>
          <GoogleSignIn onClick={this.handleGoogleSignIn}>
            <Icon name="google-plus" />
            <div>Sign In with Google</div>
          </GoogleSignIn>
        </LoginBox>
      </Background>
    );
  }
}

export default Login;
