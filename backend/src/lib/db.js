import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {throw new Error('MONGO_URI is required')}

        const conn = await mongoose.connect(mongoUri);

        console.log('DB connected', conn.connection.host);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}