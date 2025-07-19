const messageModel = require('../models/messageModel');

exports.getMessage = (req, res) => {
  console.log("I am  get request.");
  res.send(messageModel.getMessage());
};

exports.postMessage = (req, res) => {
  console.log("I am post request.");
  res.send(messageModel.postMessage());
};