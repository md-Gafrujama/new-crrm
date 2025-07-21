import express from "express";
import "dotenv/config";
import cors from "cors";
import jwt from "jsonwebtoken";
import connectDB from "./prisma/dbConnect.js";
import compression from "compression";

const app = express();
app.use(compression());

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
  import loginRouter from "./api/auth/login.routes.js";
  import updateUser from "./api/auth/updateUser.js";
  import userProfile from "./api/auth/userProfile.routes.js";
  import forgetPass1 from "./api/auth/OTP.routes.js";
  import forgetPass2 from "./api/auth/conformPass.routes.js";
  app.use("/api/editPass",changePass);
  app.use("/api/login",loginRouter);
  app.use("/api/updateUser",updateUser);
  app.use("/api/userProfile",userProfile);
  app.use("/api/forgetPass1",forgetPass1);
  app.use("/api/forgetPass2",forgetPass2);

  import allUser  from "./api/customer/allUsers.routes.js";
  import company from "./api/customer/companie.routes.js";
  import recentActivities from "./api/customer/recentActivities.api.js";
  import addUser from "./api/customer/user.routes.js";
  import userData  from "./api/customer/userData.routes.js";
  import editUser from "./api/customer/editProfile.routes.js"
  app.use("/api/allUser",allUser);
  app.use("/api/addComp",company);
  app.use("/api/recent",recentActivities);
  app.use("/api/addUser",addUser);
  app.use("/api/usersData",userData);
  app.use("/api",editUser);

  import compBaz from "./api/external/compBaz.routes.js";
  import qb2b from "./api/external/qb2b.routes.js";
  app.use("/api/external/compBazar",compBaz);
  app.use("/api/external/qb2b",qb2b);

  import exportLead from "./api/leads/exportLeads.js";
  import leadsRoutes from "./api/leads/leads.routes.js";
  app.use("/api/export", exportLead); 
  app.use("/api/leads",leadsRoutes);

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