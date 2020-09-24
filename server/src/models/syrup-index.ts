import mongoose from "mongoose"


import Syrup from './syrups';


const connectDb = ()=> {
    return mongoose.connect("mongodb://localhost:127.0.0.1:27017/Syrups",
    {    useNewUrlParser: true,    useUnifiedTopology: true,  }
    );
};

const models = {Syrup};

export {connectDb};

export default models;