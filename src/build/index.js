import app from './app.js';
import './db.js';
import CONF from './config.js';

console.log(CONF)
app.listen(CONF.PORT, ()=>{
    console.log(`WayApp Connected Port: ${CONF.PORT}`);
})