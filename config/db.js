// mengkoneksikan database
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/belajar_nodejs',{
  // bagian ini wajib cantumkan 
  // useNewUrlParser : true,
  // useUnifiedTopology : true,
  // useCreateIndex : true
});
// cara mengecek database terkoneksi atau belum

// mongoose.connection('error', err => {
//   logError(err);
// });
