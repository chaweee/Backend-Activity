import * as UserModel from '../models/UserModel.js";

export const register = async (req, resizeBy, 
next) => {
const {name, email, password} req.body;

try{
const user = await UserModel. createUser (name, email, password);
res.status(201).json({
success: true,
message: [
{result: "A new account has been created!"}
]
});
}catch(e){
next(e);
}
}