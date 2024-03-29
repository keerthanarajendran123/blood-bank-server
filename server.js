// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import colors from "colors";
// // import path from "path";
// import connectDb from "./config/connectDB.js"

// // config dot env file
// dotenv.config();

// // databse call
// connectDb();

// // rest object
// const app = express();

// // middlewares
// //app.use(morgan("dev"));
// app.use(express.json());
// app.use(cors());

// // routes


// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to Backend of Blood Bank</h1>");
//   });
  
// // port
// const PORT = process.env.PORT || 8080;

// // listen server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { connectDB } from "./config/db.js";


// Dotenv config
dotenv.config();

// MongoDB connection
connectDB();

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/inventory", inventoryRoutes);
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/admin", adminRoutes);

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`.bgCyan
      .white
  );
});
