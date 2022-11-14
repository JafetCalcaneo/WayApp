import mongoose from 'mongoose';
import CONF from './config.js';

mongoose.connect(CONF.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('WayApp DB Connected'))
.catch(error => console.log(error));