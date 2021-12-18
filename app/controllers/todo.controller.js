// koneksi ke model todo
const Apis = require('../models/todo');

exports.findAll = async (req , res) => {
  const apis = await Apis.find(); 
  res.send(apis);
}