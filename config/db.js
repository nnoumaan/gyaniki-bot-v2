
const mongoose = require('mongoose');

const DB = process.env.DATABASE_URI.replace("<PASSWORD>", process.env.PASSWORD);
;

mongoose.connect(DB)
    .then(() => {
        console.log('MongoDB connected..');
    }).catch((err) => {
        console.log('Error while creating MongoDB connection', err);
    });
