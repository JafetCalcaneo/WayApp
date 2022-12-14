import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import SECRET from '../config.js';
import Role from '../models/Role.js';
import { verifySignup, authJwt } from '../middlewares';
import { verifyToken } from '../middlewares/authJwt';

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: 'user' })
        newUser.roles = [role._id]
    }
    
    const savedUser = await newUser.save()
    console.log(savedUser,'Saved User');
    const token = jwt.sign({ id: savedUser._id }, SECRET.SECRET, {
        expiresIn: 86400
    });
    
    console.log(token);
    res.json({ token })
}

export const signin = async (req, res, next) => {

    const userFound = await User.findOne({ email: req.body.email }).populate('roles');
    console.log(userFound, 'AuthController User Found')
    if (!userFound) return res.status(400).json({ message: 'User not found' });

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

    const token = jwt.sign({ id: userFound._id }, SECRET.SECRET, {
        expiresIn: 86400
    })
    res.json({ token })

}