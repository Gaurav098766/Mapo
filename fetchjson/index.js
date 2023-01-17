"use strict";
exports.__esModule = true;
// Make a network request to fetch some json and print the result.
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/2";
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
