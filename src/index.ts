import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Restgoose } from '@xureilab/restgoose';
import * as mongoose from 'mongoose';

const port = process.env.NODE_PORT || 3000;
const mongoUri = (process.env.MONGO_URI || 'mongodb://localhost/') + 'restgoose-getting-started';
const mongoPassword = process.env.MONGO_PASSWORD || '';

// Create the minimal express with CORS and bodyParser.json
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Origin,Content-Type,Accept,Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));

openDatabase();
app.use(Restgoose.initialize());
let server = require('http').createServer(app);
server = server.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

function openDatabase() {
    // Business as usual - connect to your database with mongoose
    mongoose.connect(mongoUri, { useNewUrlParser: true })
    .catch(e => {
        console.error('MongoDB Connection Error:');
        console.error(JSON.stringify(e, null, '  '));
    });
    mongoose.connection.on('error', err => {
        console.error(`Connection error: ${err.message}`);
        process.exit(1);
    });
    mongoose.connection.once('open', () => {
        console.info('Connected to database');
    });
}