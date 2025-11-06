const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();

const port = process.env.PORT || 8080;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());
app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => (console.log(`Database is listening and Running on port ${port}`)));
    }
});
