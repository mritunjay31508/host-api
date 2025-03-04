const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const pitems = new Product({
    name: req.body.name,
    email: req.body.email,
    mobileno: req.body.mobileno,
    whatsappno: req.body.whatsappno,
    address: req.body.address,
    higherqualification: req.body.higherqualification,
    passoutyear: req.body.passoutyear,
    coursename: req.body.coursename,
    enquirydate: req.body.enquirydate,
    expectedjoindate: req.body.expectedjoindate,
  });

  try {
    const product = await pitems.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update fields only if they are provided
    if (req.body.name) product.name = req.body.name;
    if (req.body.email) product.email = req.body.email;
    if (req.body.mobileno) product.mobileno = req.body.mobileno;
    if (req.body.whatsappno) product.whatsappno = req.body.whatsappno;
    if (req.body.address) product.address = req.body.address;
    if (req.body.higherqualification) product.higherqualification = req.body.higherqualification;
    if (req.body.passoutyear) product.passoutyear = req.body.passoutyear;
    if (req.body.coursename) product.coursename = req.body.coursename;
    if (req.body.enquirydate) product.enquirydate = req.body.enquirydate;
    if (req.body.expectedjoindate) product.expectedjoindate = req.body.expectedjoindate;

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
