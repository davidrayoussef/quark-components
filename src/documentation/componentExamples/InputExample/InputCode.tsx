import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React, { Component } from 'react';
import { Input, Button, Form } from 'quark-components';
import { validateUsername, validatePassword, validateEmail } from './utils';

class AppExample extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    touched: {
      username: false,
      password: false,
      email: false
    },
    formValues: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleBlur = e => {
    this.setState({
      touched: {
        ...this.state.touched,
        [e.target.name]: true
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, email } = this.state;
    this.setState({
      formValues: {
        username,
        password,
        email
      }
    });
  };

  render() {
    const { username, password, email, touched, formValues } = this.state;
    const isValid = {
      username: validateUsername(username),
      password: validatePassword(password),
      email: validateEmail(email)
    };
    const isDisabled = !Object.values(isValid).every(Boolean);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          label="USERNAME"
          placeholder="username"
          value={username}
          errorMessage="Username should contain only letters and numbers and be between 3 and 30 characters long."
          isValid={touched.username ? isValid.username : true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <Input
          name="password"
          label="PASSWORD"
          placeholder="password"
          type="password"
          value={password}
          errorMessage="Password should be at least 5 characters and contain 1 lowercase letter, 1 uppercase letter, and one number."
          isValid={touched.password ? isValid.password : true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <Input
          name="email"
          label="EMAIL"
          placeholder="email"
          value={email}
          errorMessage="Please enter a valid email address."
          isValid={touched.email ? isValid.email : true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <Button type="submit" disabled={isDisabled}>
          Submit
        </Button>
        {Object.keys(formValues).length && (
          <div className={style.results}>
            <h3>Submitted values:</h3>
            <p>
              <code>{JSON.stringify(formValues)}</code>
            </p>
          </div>
        )}
      </Form>
    );
  }
}
`;

export const InputCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
