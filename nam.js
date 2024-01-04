"use strict";
exports.__esModule = true;
function raise(message) {
    throw new Error(message);
}
function rais(a) {
    if (typeof a === 'string') {
        return true;
    }
    else if (typeof a === 'number') {
        return true;
    }
    else {
        return false;
    }
}
