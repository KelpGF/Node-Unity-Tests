const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const MongooseModule = require('./src/config/mongoDb/mongoose.module');
const ControllerModule = require('./src/presentation/controllers/controller.module');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongooseModule.initDatabases();
new ControllerModule(app)

app.listen(3000, () => {
	console.log('Success');
});
