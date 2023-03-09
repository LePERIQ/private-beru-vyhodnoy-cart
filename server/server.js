const express = require('express');
const cors = require('cors');
const apiDataRouter = require('./src/roters/apiDataRoter');
const morgan = require('morgan');

const PORT = 3001;
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/beerShopData', apiDataRouter);

app.listen(PORT, () => console.log('Server is running on PORT: ', PORT));
