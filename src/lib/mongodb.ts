// src/lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'your_mongodb_atlas_uri';

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};