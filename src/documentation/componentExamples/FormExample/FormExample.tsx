import React, { Component } from 'react';

import { Form } from '../../../components/Form';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { CheckBox } from '../../../components/CheckBox';
import { Button } from '../../../components/Button';

import { ButtonType, FormExampleState } from '../../../shared';

import style from './FormExample.css';

class AppExample extends Component<{}, FormExampleState> {
  state: Readonly<FormExampleState> = this.getInitialState();

  getInitialState(): FormExampleState {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      favorites: [],
      formValues: {}
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      [event.target.name]: event.target.value
    } as Pick<FormExampleState, 'firstName' | 'lastName' | 'gender'>);
  };

  handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { favorites } = this.state;
    const newValue = event.target.value;
    this.setState({
      favorites: favorites.includes(newValue)
        ? favorites.filter(v => v !== newValue)
        : favorites.concat(newValue)
    });
  };

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
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

  handleClear = (event: React.MouseEvent): void => {
    event.preventDefault();
    this.setState(this.getInitialState());
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
          options={['male', 'female', 'non-binary']}
          value={gender}
          placeholder="Select gender"
          onChange={this.handleChange}
        />
        <CheckBox
          className={style.favorites}
          name="favorites"
          label="FAVORITE FRAMEWORKS"
          options={['React', 'Angular', 'Vue']}
          checkedOptions={favorites}
          onChange={this.handleCheckBox}
        />
        <div className={style.buttonGroup}>
          <Button styleType={ButtonType.Reverse} type="submit">
            Submit
          </Button>
          <Button styleType={ButtonType.Reverse} onClick={this.handleClear}>
            Clear
          </Button>
        </div>
        <div className={style.results}>
          <h3>Changed values:</h3>
          <p>
            <code>firstName:</code> {firstName}
          </p>
          <p>
            <code>lastName:</code> {lastName}
          </p>
          <p>
            <code>gender:</code> {gender}
          </p>
          <p>
            <code>favorites:</code> {favorites.join(', ')}
          </p>
        </div>
        <div className={style.results}>
          <h3>Submitted values:</h3>
          <p>
            <code>{JSON.stringify(formValues)}</code>
          </p>
        </div>
      </Form>
    );
  }
}

export const FormExample = (): React.ReactElement => <AppExample />;
