import React from 'react';
import './Invoice.css';

const Invoice = () => {
  const invoiceData = {
    logo: 'https://i.pinimg.com/564x/6b/47/2a/6b472a867e6f8b6f38b705a762e1123e.jpg',
    companyName: 'Antiqurian',
    companyAddress: '123 Main St, Anytown, USA',
    invoiceNumber: 'INV-001',
    invoiceDate: '2024-08-06',
    dueDate: '2024-09-06',
    customerName: 'John Doe',
    customerAddress: '456 Elm St, Othertown, USA',
    items: [
      { description: 'Product 1', quantity: 2, unitPrice: 50 },
      { description: 'Product 2', quantity: 1, unitPrice: 100 },
     
    ],
    taxRate: 0.08,
    discount: 20,
    paymentMethod: 'Credit Card',
    latePaymentFee: 10,
  };

  const calculateTotal = () => {
    const subtotal = invoiceData.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
    const tax = subtotal * invoiceData.taxRate;
    const total = subtotal + tax - invoiceData.discount;
    return total;
  };

  const totalAmount = calculateTotal();

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <img src={invoiceData.logo} alt="Company Logo" className="invoice-logo" />
        <div className="company-details">
          <h1>{invoiceData.companyName}</h1>
          <p>{invoiceData.companyAddress}</p>
        </div>
      </div>

      <div className="invoice-info">
        <h2>Invoice</h2>
        <p>Invoice Number: {invoiceData.invoiceNumber}</p>
        <p>Invoice Date: {invoiceData.invoiceDate}</p>
        <p>Due Date: {invoiceData.dueDate}</p>
      </div>

      <div className="customer-info">
        <h3>Bill To:</h3>
        <p>{invoiceData.customerName}</p>
        <p>{invoiceData.customerAddress}</p>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.unitPrice.toFixed(2)}</td>
              <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="invoice-summary">
        <p>Subtotal: ${invoiceData.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0).toFixed(2)}</p>
        <p>Tax: ${(invoiceData.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0) * invoiceData.taxRate).toFixed(2)}</p>
        <p>Discount: -${invoiceData.discount.toFixed(2)}</p>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>

      <div className="payment-info">
        <h3>Payment Information</h3>
        <p>Payment Method: {invoiceData.paymentMethod}</p>
        <p>Due Date: {invoiceData.dueDate}</p>
        <p>Late Payment Fee: ${invoiceData.latePaymentFee.toFixed(2)}</p>
      </div>

      <div className="footer">
        <p>Thank you for your business!</p>
        <p>For any inquiries, please contact us at support@yourcompany.com</p>
      </div>
    </div>
  );
};

export default Invoice;
