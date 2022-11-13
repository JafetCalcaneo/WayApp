import Subscriber from "../models/Subscriber";
import jwt  from "jsonwebtoken";
import SECRET from '../config';

export const subscription = async (req, res) => {
    const userId = req.body.id;

    const newSubscriber = new Subscriber({
        userId
    });

    await newSubscriber.save();
    const subs = await Subscriber.count();
    res.json({subs});
}

export const loadSubs = async (req, res) => {
    const subs = await Subscriber.count();
    res.json({subs});
}