const functions = require("firebase-functions");
const env = require("dotenv").config();
const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("./knexfile");
const express = require("express");

const app = express();
const router = require("./router");

// Initialize Knex
const knex = Knex(knexConfig.development);
Model.knex(knex);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.router = functions.https.onRequest(router)