const express = require('express');
const app = express();
require('dotenv').config();
 
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

const mongoose = require('mongoose');
//configure mongoose
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MongoDB');
    }
  }
);
const packagesRouter = require('./src/routes/packagesRoutes');
const citiesRouter = require('./src/routes/citiesRouter');
const deliveriesRouter = require('./src/routes/deliveriesRouter');
app.use('/api/packages', packagesRouter);
app.use('/api/cities', citiesRouter);
app.use('/api/deliveries', deliveriesRouter);
 
module.exports = app;