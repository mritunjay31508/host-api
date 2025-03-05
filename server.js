const express = require('express');
const mongoose = require('mongoose');

var cors = require('cors');
const app = express();
app.use(cors());
const port =3003;

// MongoDB से कनेक्ट करें

mongoose.connect('mongodb://127.0.0.1:27017/student-enq ', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Models
const Product = require('./models/product');

// Controllers
const productController = require('./controller/productController');

// Middleware
app.use(express.json());

// Routes
app.get('/students', productController.getAllProducts);
app.get('/students/:id', productController.getProductById);
app.post('/students', productController.createProduct);
app.put('/students/:id', productController.updateProduct);    // Update route
app.delete('/students/:id', productController.deleteProduct); // Delete route


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

