import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

// create server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is conecting with port: ${port} `);
  connectDB();
});
