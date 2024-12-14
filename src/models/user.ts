// src/models/User.ts
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  points: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['Basic', 'VIP', 'Gold'],
    default: 'Basic',
  }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);