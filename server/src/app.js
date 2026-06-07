import express from 'exprss';

const app = express();

app.use(express.json());

app.use('api/auth/v1',authRoutes);

export default app;