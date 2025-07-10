import express from "express";
import "dotenv/config";
import cors from "cors";
import jwt from "jsonwebtoken";
import connectDB from "./prisma/dbConnect.js";
const app = express();

app.use(cors({
  origin: [ 'http://localhost:5173','https://our-crm-website-99fa.vercel.app'], // Removed trailing slash
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Disposition'],
  
}));

app.use(express.json()); 

connectDB();

  import alertRouter from "./api/alerts/alerts.routes.js";
  app.use("/api/alert",alertRouter);

  import changePass from "./api/auth/changePass.routes.js";
  import checkingOTP from "./api/auth/checkingOTP.js";
  import loginRouter from "./api/auth/login.routes.js";
  import updateUser from "./api/auth/updateUser.js";
  import userProfile from "./api/auth/userProfile.routes.js"
  app.use("/api/editPass",changePass);
  app.use("/api/checkOTP",checkingOTP);
  app.use("/api/login",loginRouter);
  app.use("/api/updateUser",updateUser);
  app.use("/api/userProfile",userProfile);

  import allUser  from "./api/customer/allUsers.routes.js";
  import company from "./api/customer/companie.routes.js";
  import recentActivities from "./api/customer/recentActivities.api.js";
  import addUser from "./api/customer/user.routes.js";
  import userData  from "./api/customer/userData.routes.js";
  app.use("/api/allUser",allUser);
  app.use("/api/addComp",company);
  app.use("/api/recent",recentActivities);
  app.use("/api/addUser",addUser);
  app.use("/api/usersData",userData);

  import compBaz from "./api/external/compBaz.routes.js";
  import qb2b from "./api/external/qb2b.routes.js";
  app.use("/api/external/compBazar",compBaz);
  app.use("/api/external/qb2b",qb2b);

  import exportLead from "./api/leads/exportLeads.js";
  import leadsRoutes from "./api/leads/leads.routes.js";
  app.use("/api/export", exportLead); 
  app.use("/api/leads",leadsRoutes);

// import checkingOTP from "./api/checkingOTP.js";
// import userProfile from "./api/userProfile.api.js";
// import updateUserRoutes from "./api/updateUser.js"; 
// import addLeads from "./api/addLeads.api.js"
// import udleads from "./api/udleads.api.js"
// import changePass from "./api/changePass.api.js";
// import qb2b from "./api/qb2b.api.js"

import updatePassword from "./middleware/updatePassword.middleware.js";
import jwtTokenMiddleware from "./middleware/jwtoken.middleware.js"; 

app.get("/api/protected-route", jwtTokenMiddleware, (req, res) => {
  res.json({
    message: 'Protected route accessed!',
    user: req.user
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to index page");
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;