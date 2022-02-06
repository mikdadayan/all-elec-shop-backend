import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_ATLAS as string);

    console.log(
      `MongoDB connected: ${await conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    let err = error as Error;
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
