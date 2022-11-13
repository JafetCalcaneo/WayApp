import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const subscriberSchema = new mongoose.Schema({

    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},{
    timestamps: true,
    versionKey: false,
});

// subscriberSchema.statics.countSubs = async () => {
//     mongoose.Schema.c
// }

export default mongoose.model('Subscriber', subscriberSchema);