import express = require('express');
import mongoose = require('mongoose');
import { cors } from './utils/cors';
import { routesSetup } from './routes/routes-setup';

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;
const DB = process.env.DB || 'sample_template';
const app: express.Application = express();

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

async function main() {
    try {

        routesSetup(app);

        app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

main();
