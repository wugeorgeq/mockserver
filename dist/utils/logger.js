"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logResponse = logResponse;
function logResponse(res) {
    console.log("response: \n " + JSON.stringify(res));
}