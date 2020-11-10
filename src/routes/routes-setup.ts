import express = require('express');
import { helloWorldRoute } from './hello-world';

export function routesSetup(app: express.Application) {
    helloWorldRoute(app);
}
