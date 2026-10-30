import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes.js';
const app=express();
const configuredOrigins=(process.env.CLIENT_URL||'http://localhost:5173,http://127.0.0.1:5173').split(',').map(origin=>origin.trim()).filter(Boolean);
app.use(cors({origin:(origin,callback)=>{
  if(!origin)return callback(null,true);
  const isLocalDev=/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  callback(null,isLocalDev||configuredOrigins.includes(origin));
}}));
app.use(express.json());
app.get('/api/health',(_req,res)=>res.json({status:'ok',service:'PeoplePilot HR API'}));
app.use('/api',routes);
app.use((err,_req,res,_next)=>{console.error(err);res.status(err.status||500).json({message:err.message||'Server error'});});
mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/hr_employee_management').then(()=>app.listen(process.env.PORT||5000,()=>console.log('API listening at http://localhost:5000'))).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exit(1)});
