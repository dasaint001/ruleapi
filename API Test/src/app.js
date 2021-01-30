const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
const route = require('./routes/index');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
const PORT = process.env.PORT || 5000;


app.use('/api', route);



// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`The magic happens at port ${PORT}`));
;