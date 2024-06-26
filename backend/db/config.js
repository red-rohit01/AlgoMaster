const mongoose = require('mongoose');
require('dotenv').config()
const DB=process.env.DB_KEY;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(`Successfully Connected`)
}).catch((e) => console.log("Error:", e));