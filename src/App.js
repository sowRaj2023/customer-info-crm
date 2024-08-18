import React, { Component } from 'react';
import CustomerInput from './components/CustomerInput';
import CustomerGrid from './components/CustomerGrid';
import './App.css'; // Import the CSS file for styling

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: JSON.parse(localStorage.getItem('customers')) || [],
    };
  }

  handleSubmit = (customerData) => {
    this.setState(prevState => {
      const updatedCustomers = [...prevState.customers, customerData];
      localStorage.setItem('customers', JSON.stringify(updatedCustomers));
      return { customers: updatedCustomers };
    });
  };

  pushToCRM = (index) => {
    const customer = this.state.customers[index];
    // Simulate pushing to CRM
    console.log('Pushing to CRM:', customer);

    // Example response handling
    alert('Customer data sent to CRM successfully!');
  };

  render() {
    const { customers } = this.state;

    return (
      <div className="app-container">
        <CustomerInput onSubmit={this.handleSubmit} />
        <CustomerGrid data={customers} onPushToCRM={this.pushToCRM} />
      </div>
    );
  }
}

export default App;




