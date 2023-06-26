import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import matchesRoutes from './routes/matches.routes.js'

const app = express()

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/v1', matchesRoutes);

export default app;


