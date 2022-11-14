import app from './app.js';
import './db';
import CONF from './config';

console.log(CONF)
app.listen(CONF.PORT, ()=>{
    console.log(`WayApp Connected Port: ${CONF.PORT}`);
})