import {Schema, model} from 'mongoose';
import brcrypt from 'bcryptjs';

const travelerSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [
        {
            ref: 'Role',
            type: Schema.Types.ObjectId,
        }
    ]
},{
    timestamps: true,
    versionKey: false,
})

travelerSchema.statics.encryptPassword = async (password) => {
    const salt = await brcrypt.genSalt(10);
    return await brcrypt.hash(password, salt);
}

travelerSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await brcrypt.compare(password, receivedPassword);
}