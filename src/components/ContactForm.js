import React, { Component } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import * as api from '../api';

export default class ContactForm extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    errors: {},
    touched: false,
    submitted: false,
    submitting: false,
  };

  validators = {
    name: {
      isValid: (input) => input && input.length >= 0,
      error: 'Nimi on pakollinen',
    },
    email: {
      isValid: (input) => input && input.length >= 0,
      error: 'Sähköposti on pakollinen',
    },
    message: {
      isValid: (input) => input && input.length >= 0,
      error: 'Viesti on pakollinen',
    },
  };

  handleChange = (event) => {
    if (!this.state.touched) {
      api.wakeUpEmailService();
    }
    this.setState({ touched: true });
    const { name, value } = event.target;
    if (this.state.errors[name]) {
      const { errors } = this.state;
      errors[name] = undefined;
      this.setState({ errors });
    }
    const formData = { ...this.state.formData, [name]: value };
    this.setState({ formData });
  };

  handleValidation = (event) => {
    if (!this.state.touched) return;
    const { name, value } = event.target;
    const { isValid, error } = this.validators[name];
    if (!isValid(value)) {
      const { errors } = this.state;
      errors[name] = error;
      this.setState({ errors });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.formIsValid()) return;
    console.log('lähetetään form', this.state);
    this.setState({ submitting: true });
    const { email, name, phoneNumber, message } = this.state.formData;

    api
      .sendEmail({
        from: email,
        name,
        phoneNumber,
        message,
      })
      .then(() => {
        this.setState({
          formData: {
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
          },
          errors: {},
          touched: false,
          submitted: true,
          submitting: false,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        const errors = { ...this.state.errors, submit: true };
        this.setState({ errors, submitting: false });
      });
  };

  formIsValid() {
    const { name, email, message } = this.state.formData;
    const errors = {};
    if (!this.validators.name.isValid(name))
      errors.name = this.validators.name.error;
    if (!this.validators.email.isValid(email))
      errors.email = this.validators.email.error;
    if (!this.validators.message.isValid(message))
      errors.message = this.validators.message.error;
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  render() {
    return this.state.submitted ? (
      <div className="form-submitted">
        <div>
          <p>Kiitos viestistäsi.</p>
          <p>Palaan asiaan mahdollisimman pian!</p>
        </div>
      </div>
    ) : (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="text-input">
          <input
            type="text"
            name="name"
            placeholder="Nimi *"
            className={`${
              this.state.errors.name
                ? 'form__input--error form__input'
                : 'form__input'
            } `}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            value={this.state.formData.name}
          />
          {this.state.errors.name && (
            <span className="form__error">{this.state.errors.name}</span>
          )}
        </div>
        <div className="text-input">
          <input
            type="email"
            name="email"
            placeholder="Sähköposti *"
            className={`${
              this.state.errors.email
                ? 'form__input--error form__input'
                : 'form__input'
            } `}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            value={this.state.formData.email}
          />
          {this.state.errors.email && (
            <span className="form__error">{this.state.errors.email}</span>
          )}
        </div>
        <div className="text-input">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Puhelinnumero"
            className="form__input"
            onChange={this.handleChange}
            value={this.state.formData.phoneNumber}
          />
        </div>
        <div className="textarea">
          <textarea
            name="message"
            placeholder="Viesti *"
            className={`${
              this.state.errors.message
                ? 'form__textarea--error form__textarea'
                : 'form__textarea'
            } `}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            value={this.state.formData.message}
          />
          {this.state.errors.message && (
            <span className="form__error">{this.state.errors.message}</span>
          )}
        </div>
        {this.state.errors.submit && (
          <div className="form__api-error">
            Virhe viestin lähetyksessä. Yritä uudelleen tai ota yhteyttä
            sähköpostitse info@niinapartanen.fi.
          </div>
        )}
        <button
          type="submit"
          className="form__button"
          disabled={this.state.submitting}
        >
          {this.state.submitting ? (
            <BeatLoader size={7} color={'#FFFFFF'} />
          ) : (
            'LÄHETÄ'
          )}
        </button>
      </form>
    );
  }
}
