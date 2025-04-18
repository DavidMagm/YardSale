const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const initRouter = require('./routes/index');
const {logError, errorHandler, boomErrorHandler, sqlErrorHandler} = require('./middleware/errorHandler')
app.use(express.json());

const ipList = ['http://localhost:5500', 'http://127.0.0.1:5500'];

const corsOptions = {
  origin: (origin, callback) => {
    if(ipList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


initRouter(app);
app.use(logError);
app.use(sqlErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});