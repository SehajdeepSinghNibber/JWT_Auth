import express from 'exprss';
import morgan from 'morgan'

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('api/auth/v1',protectRoute,authRoutes);

export default app;