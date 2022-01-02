// koneksi ke model todo
const Apis = require("../models/todo");

// Memanggil semua data
exports.findAll = async (req, res) => {
  const apis = await Apis.find();
  res.send(apis);
};

// membuat data
exports.create = async (req, res) => {
  const apis = new Apis({
    title: req.body.title,
    status: req.body.status,
  });

  await apis.save();
  res.status(201).json({
    message: "Todo Successfully added",
  });
};

// memanggil 1 data berdasarkan ID
exports.findOne = async (req, res) => {
  const id = req.params.id;

  await Apis.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while show post",
      });
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;

  await Apis.findOneAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "POST NOT FOUND",
        });
      }
      res.send({
        message: "DATA UPDATED",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while show post",
      });
    });
};

// mengahpus data dari database

exports.remove = async (req, res) => {
  const id = req.params.id;

  await Apis.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(401).send({
        message: err.message || "Some error while REMOVE post",
      });
    });
};
