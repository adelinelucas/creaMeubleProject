import mongoose from "mongoose";

export const connectDB = (url) => mongoose.connect(url, 
    {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
        useUnifiedTopology:true
    }
)