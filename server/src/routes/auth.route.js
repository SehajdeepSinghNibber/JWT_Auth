import express, { Router } from 'express';
import { signup, login, logout } from '../controller/auth.controller';

const router = express.Router();

router.post('/login',login);

router.post('/logout',logout);

router.post('/signup',signup);

router.get('/authCheck',getMe);

export default router;