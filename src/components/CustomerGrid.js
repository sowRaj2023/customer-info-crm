import React from 'react';
import './CustomerGrid.css'; // Import the CSS file for styling

const CustomerGrid = ({ data, onPushToCRM }) => {
  return (
    <div className="customer-grid-container">
      <h2>Customer Data</h2>
      <table className="customer-grid-table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Current Organization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => (
            <tr key={index}>
              <td>{customer.phoneNumber}</td>
              <td>{customer.firstName} {customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.address.street}, {customer.address.city}, {customer.address.state} {customer.address.zip}</td>
              <td>{customer.organization}</td>
              <td>
                <button onClick={() => onPushToCRM(index)}>Push to CRM</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerGrid;

