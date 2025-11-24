import * as UserController from "../controllers/UserController.js";
import express from "express";
// import authHandler from '../middleware/authHandler.js';

const UserRoutes = express.Router();

// UserRoutes.use(authHandler);
UserRoutes.post('/register', UserController.register);
UserRoutes.post('/login', UserController.login);

export default UserRoutes;
