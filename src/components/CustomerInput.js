import React, { Component } from 'react';
import "./CustomerInput.css"
class CustomerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      },
      organization: '',
      errors: {},
    };
  }

  validate = () => {
    const { phoneNumber, firstName, lastName, email, address, organization } = this.state;
    let errors = {};
    let formIsValid = true;

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      formIsValid = false;
      errors['phoneNumber'] = 'Phone number must be 10 digits';
    }

    // Name validation
    if (!firstName || !lastName) {
      formIsValid = false;
      errors['name'] = 'Both first and last names are required';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formIsValid = false;
      errors['email'] = 'Email is not valid';
    }

    // Address validation
    const { street, city, state, zip } = address;
    if (!street || !city || !state || !zip) {
      formIsValid = false;
      errors['address'] = 'All address fields are required';
    }

    // Organization validation
    if (!organization) {
      formIsValid = false;
      errors['organization'] = 'Current organization is required';
    }

    this.setState({ errors });
    return formIsValid;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      const field = name.split('.')[1];
      this.setState(prevState => ({
        address: {
          ...prevState.address,
          [field]: value
        }
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.props.onSubmit(this.state);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={this.handleChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="address.street"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="address.city"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="address.state"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>ZIP/Postal Code:</label>
          <input
            type="text"
            name="address.zip"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Current Organization:</label>
          <input
            type="text"
            name="organization"
            onChange={this.handleChange}
          />
          {errors.organization && <span>{errors.organization}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CustomerInput;
