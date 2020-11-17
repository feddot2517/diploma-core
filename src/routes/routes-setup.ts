import express = require('express');
import { makeBuild } from './makeBuild';

export function routesSetup(app: express.Application) {
    makeBuild(app);
}
