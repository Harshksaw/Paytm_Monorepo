import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const PORT = 4000;
const app = express();

dotenv.config();

app.use(express.json())

app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173',
}));
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)


app.get('/test', (req, res)=>{
    res.json('text ok');
});

app.post('/register', (req, res)=>{
    const { name , email , password}= req.body;
    res.json({name , email, password}); 
}) 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});