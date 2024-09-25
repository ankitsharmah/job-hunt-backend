import mongoose from 'mongoose';

const ConnectDb= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db")
    } catch (error) {
        console.log("error in connecting to db ",error)
    }
}

export default ConnectDb;