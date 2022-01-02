// memanggil mongoose
const mongoose = require("mongoose");
// membuat type schema
const Apis = mongoose.model("Apis", {
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

module.exports = Apis;
