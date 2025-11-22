import * as UserController from '../controllers/UserController.js';
import express from 'express';

const UserRoutes = express.Router();

UserRoutes.get('/all', 
UserController.fetchUser); 

export default UserRoutes;