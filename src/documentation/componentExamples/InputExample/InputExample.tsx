import React, { Component } from 'react';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Form } from '@/components/Form';

import { validateUsername, validatePassword, validateEmail } from '@/utilities';

import style from './InputExample.scss';

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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      touched: {
        ...this.state.touched,
        [event.target.name]: true
      }
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { username, password, email } = this.state;
    this.setState({
      formValues: {
        username,
        password,
        email
      }
    });
  };

  render(): JSX.Element {
    const { username, password, email, touched, formValues } = this.state;
    const isValid = {
      username: validateUsername(username),
      password: validatePassword(password),
      email: validateEmail(email)
    };
    const isDisabled = !Object.values(isValid).every(Boolean);

    return (
      <Form onSubmit={this.handleSubmit} style={{ gridGap: '.7rem' }}>
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
        <Button type="submit" disabled={isDisabled} style={{ width: '75px' }}>
          Submit
        </Button>
        {Object.keys(formValues).length !== 0 && (
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

export const InputExample = (): React.ReactElement => <AppExample />;
