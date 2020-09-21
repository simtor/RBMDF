import mongoose from 'mongoose'


import Syrup from './syrups';


const connectDb = ()=> {
    return mongoose.connect("mongodb://127.0.0.1:27017");
};

const models = {Syrup};

export {connectDb};

export default models;