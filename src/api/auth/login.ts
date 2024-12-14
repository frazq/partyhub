// src/api/auth/login.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { connectDB } from '../../lib/mongodb';
import { User } from '../../models/user';
import { decrypt } from '../../lib/encryption';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const login = async (req: Request, res: Response) => {
  try {
    await connectDB();

    const { email, password } = req.body;

    // Znajdź użytkownika
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Nieprawidłowy email lub hasło' });
    }

    // Porównaj hasła (zaszyfrowane)
    const decryptedPassword = decrypt(user.password);
    if (password !== decryptedPassword) {
      return res.status(401).json({ message: 'Nieprawidłowy email lub hasło' });
    }

    // Wygeneruj token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        status: user.status,
        points: user.points
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Wystąpił błąd serwera' });
  }
};