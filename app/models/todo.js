// memanggil mongoose
const mongoose = require('mongoose');
// membuat type schema
const Apis = mongoose.model('Apis',{
  nama : {
    type : String,
    required : true,
    
  },
  status : {
    type : String,
    required : true,

  },
  timestamps : {
    type : String,
    default : Date.now()
  }
})


module.exports = Apis;