const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// const itemRoutes = require("./routes/itemRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

const sampleRoutes = require('./routes/index');
app.use('/api', sampleRoutes);

//Connect to mongoose
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log(` ✅ Connected to MongoDB`);
    app.listen(PORT, () => { console.log(` 🚀 Server is running on port ${PORT}`);
  });
})
.catch((error) => {
console.error(' ❌ Connection failed', error);
});
