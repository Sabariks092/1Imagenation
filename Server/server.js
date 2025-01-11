import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './Routes/userRoutes.js';
import imageRouter from './Routes/imageRoutes.js';
 
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

app.use(express.json());
app.use(cors()); // No arguments needed here unless you are passing options.
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)


app.get('/', (req, res) => res.send('API working')); // Strings need to be wrapped in quotes.

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`)); // Use template literals for readability.
