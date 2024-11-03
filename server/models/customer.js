
const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    customerName: String,
    contactNumber: Number, 
    emergencyNumber: Number,
    CNIC: Number
  });
  
  const Customer = mongoose.model('Customer', customerSchema, 'customer');
  
  module.exports = Customer;