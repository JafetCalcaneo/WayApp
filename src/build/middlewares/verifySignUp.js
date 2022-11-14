import { ROLES } from '../models/Role.js';
import User from '../models/User.js';

export const checkExistingUser = async (req, res, next) => {
    console.log('CheckExistingUser');
 try{
    const userFound = await User.findOne({username: req.body.username});
    console.log(userFound);
    if(userFound) return res.status(400).json({message: '¡El usuario ya existe!'});

    const email = await User.findOne({ email: req.body.email });
    if(email) return res.status(400).json({message: '¡El correo ya existe!'});
    console.log('Antes del next()')
    next();
 }catch(error){
    res.status(500).json({message: error.message});
 }
}

export const checkExistingRole = (req, res, next) => {
    console.log('checkExistingRole');
    console.log(req.body);
    console.log(req.body.roles);
    // req.body.roles.find();
    // if(!req.body.roles) return res.status(400).json({message: 'No roles'});

    for(let i = 0; i < (req.body.roles[i]); i++){
        if(!ROLES.includes(req.body.roles[i])){
            return res.status(400).json({
                message: `¡El role ${req.body.roles[i]} no existe!`,
            });
        }
    }

    next();
}