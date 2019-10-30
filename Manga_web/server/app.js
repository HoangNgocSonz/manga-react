const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./api/modules/book/book.router');
const userRouter = require('./api/modules/user/user.router');
const imageRouter = require('./api/modules/image/image.router');
const chapRouter = require('./api/modules/chaps/chap.router');
const categoryRouter = require('./api/modules/category/category.router');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors')

mongoose.connect(config.mongoConnectionString);
// const PORT = process.env.PORT || 3000;
const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static('../client'));
app.use('/api/book', bookRouter);
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);
app.use('/api/chap', chapRouter);
app.use('/api/category', categoryRouter);


app.listen(PORT, function() {
  console.log(`Server is listening on ${PORT}`);
});

//featherjs, sails.js,srapy

