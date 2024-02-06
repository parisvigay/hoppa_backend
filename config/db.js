import 'dotenv/config.js';
import mongoose from "mongoose";

mongoose.connect(`${process.env.DATABASE_URL}`)

export default mongoose.connection;