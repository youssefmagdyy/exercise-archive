import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import exercisesRoutes from './routes/exercises.js';

const app = express();

app.use('/exercises',exercisesRoutes)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://youssefmagdyy:Excg0EqRupFqDaUI@cluster0.sitlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=>app.listen(PORT,()=>{console.log(`Server On ${PORT}`)})).catch((error)=>{console.log(error.message)});
