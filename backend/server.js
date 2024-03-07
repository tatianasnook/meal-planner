const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = 4000 || process.env.port

mongoose
.connect(process.env.MONGOBD_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.listen(PORT, () => {
  console.log(`I AM LISTENING on PORT ${PORT}`)
})
