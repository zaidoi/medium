import mongoose from "mongoose";

export const connectDB =  async() => {
    try {
        console.log(process.env.MONGOURI)
        await mongoose.connect(process.env.MONGOURI)
    } catch (error) {
        console.log(`DB not connected ${error}`)
    }
}

