
var express = require("express");
var consign = require ("consign");

const app = express();

consign()

.include("models")
.then("libs/middlewares.js")
.then ("routes")
.then("libs/boot.js")
.into(app);




