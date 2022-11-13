const express = require('express');
const app = express();
const path = require('path');
import authRoutes from './routes/auth.routes';
import subsRoutes from './routes/subs.routes';
import cors from "cors";
import {createRoles} from './libs/initialSetup';

import loginRoutes from './routes/login.routes';
createRoles();
app.use(express.json());
app.use(express.static('./dist'))
app.use(express.static('./src/public'));
app.use(express.static(path.join(__dirname,'public')))
app.use(
    cors({
      origin: "http://localhost:4000",
    })
  );

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../dist/index.html'))
})

app.get('/login',(req, res) => {
    res.sendFile(path.resolve(__dirname,'../dist/login.html'))
})

app.use('/api/auth', authRoutes);
app.use('/api/subs', subsRoutes);

export default app;
