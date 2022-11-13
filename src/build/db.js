import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/wayappdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('WayApp DB Connected'))
.catch(error => console.log(error));