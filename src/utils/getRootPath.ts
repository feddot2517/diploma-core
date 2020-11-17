const path = require('path');

export function getRootPath() {
    return path.join(__dirname, '..', '..');
}

export function getReactPath() {
    return path.join(getRootPath(), './diploma-test', './src');
}