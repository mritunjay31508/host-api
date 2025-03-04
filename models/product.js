const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileno: { type: String, required: true },
  whatsappno: { type: String, required: true },
  address: { type: String, required: true },
  higherqualification: { type: String, required: true },
  passoutyear: { type: Number, required: true }, 
  coursename: { type: String, required: true },
  enquirydate: { type: Date, required: true }, 
  expectedjoindate: { type: Date }  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
