import * as express from 'express';
import { prop, Typegoose } from 'typegoose';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
/*+*/ import { Restgoose } from '@xureilab/restgoose';

/*+*/ // Import the models
/*+*/ import './movie';
/*+*/ import './actor';

// Create the minimal express with bodyParser.json
const app = express();
app.use(bodyParser.json());

/*+*/ // Initialize Restgoose
/*+*/ app.use(Restgoose.initialize());

// Connect to your database with mongoose
const mongoHost = (process.env.MONGO_URI || 'mongodb://localhost/') + 'restgoose-getting-started';
console.log('Mongo Host:', mongoHost);
mongoose.connect(mongoHost)
    .catch(e => {
        console.error('MongoDB Connection Error:');
        console.error(JSON.stringify(e, null, '  '));
    });
mongoose.connection.on('error', err => {
    console.error(`Connection error: ${err.message}`);
});
mongoose.connection.once('open', () => {
    console.info('Connected to database');
});

//Start the server
let server = require('http').createServer(app);
server = server.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

export { app, server };
