const mongoose = require('mongoose');
// koneksi ke model todo
const Apis = require('../models/todo');

exports.findAll = async (req , res) => {
  const apis = await Apis.find()
  res.send(apis);
}

exports.create = async (req , res) => {
  const apis = new Apis({
    title : req.body.title,
    status : req.body.status,
  });
 
  await apis.save()
  res.status(201).json({
    message : "Todo Successfully added",
  })

}




