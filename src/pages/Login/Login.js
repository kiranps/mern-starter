import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FormItem from "components/FormItem";
import View from "components/View";
import Link from "components/Link";
import CheckBox from "components/CheckBox";
import Button from "components/Button";
import { Background, Heading, Form, UserName, Password } from "./Styled";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, username: "", password: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.login();
  };

  render() {
    const { loading } = this.state;
    const { authenticated } = this.props;

    if (authenticated) return <Redirect to="/page1" />;

    return (
      <Background>
        <Form onSubmit={this.handleSubmit}>
          <Heading>Login</Heading>
          <FormItem label="Username" message="">
            <UserName onChange={this.handleChange} />
          </FormItem>
          <FormItem label="Password" message="">
            <Password onChange={this.handleChange} />
          </FormItem>
          <View margin="0 0 4px 0">
            <View.Inline float="left">
              <CheckBox label="Remember me" />
            </View.Inline>
            <View.Inline float="right">
              <Link to="/forgot-password">forgot password</Link>
            </View.Inline>
          </View>
          <Button type="submit" label="Submit" loading={loading} />
          <View margin="5px 0 0 0">
            <View.Inline>
              or <Link to="/signup">register now!</Link>
            </View.Inline>
          </View>
        </Form>
      </Background>
    );
  }
}

export default Login;
