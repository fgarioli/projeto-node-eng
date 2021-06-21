import mongoose from "mongoose";

export default async () => {
    const host = process.env.DB_HOST;
    const port = process.env.DB_PORT;
    const dbname = process.env.DB_NAME;

    await mongoose.connect(`mongodb://${host}:${port}/${dbname}`, {
        user: process.env.MONGO_ROOT_USER,
        pass: process.env.MONGO_ROOT_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        authSource: "admin"
    });
}