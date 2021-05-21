import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React, { Component } from 'react';
import { Form, Input, Select, CheckBox, Button } from 'quark-components';

class AppExample extends Component {
  state = this.getInitialState()

  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      favorites: [],
      formValues: {}
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCheckBox = e => {
    const { favorites } = this.state;
    const newValue = e.target.value;
    this.setState({
      favorites: favorites.includes(newValue) 
        ? favorites.filter(v => v !== newValue)
        : favorites.concat(newValue)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, gender, favorites } = this.state;
    this.setState({
      formValues: {
        firstName,
        lastName,
        gender,
        favorites
      }
    });
  };

  handleClear = e => {
    e.preventDefault();
    this.setState(
      this.getInitialState()
    );
  };

  render() {
    const { firstName, lastName, gender, favorites, formValues } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="firstName"
          label="FIRST NAME"
          value={firstName}
          placeholder="Enter first name"
          onChange={this.handleChange}
        />
        <Input
          name="lastName"
          label="LAST NAME"
          value={lastName}
          placeholder="Enter last name"
          onChange={this.handleChange}
        />
        <Select
          name="gender"
          label="GENDER"
          options={["male", "female", "non-binary"]}
          value={gender}
          placeholder="Select gender"
          onChange={this.handleChange}
        />
        <CheckBox
          name="favorites"
          label="FAVORITE FRAMEWORKS"
          options={["React", "Angular", "Vue"]}
          value={favorites}
          checkedOptions={favorites}
          onChange={this.handleCheckBox}
        />
        <div>
          <Button styleType="reverse" type="submit">
            Submit
          </Button>
          <Button styleType="reverse" onClick={this.handleClear}>
            Clear
          </Button>
        </div>
      </Form>
    );
  }
}
`;

export const FormCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
