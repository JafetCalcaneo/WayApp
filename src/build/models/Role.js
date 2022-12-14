import mongoose from 'mongoose';

export const ROLES = ['traveler', 'driver', 'admin'];

const roleSchema = new mongoose.Schema({
    name: String
},{
    versionKey: false,
});

export default mongoose.model('Role', roleSchema);