'use strict'
require('dotenv').config();

const {db}=require('./models/index');
const myserver=require('./server');

db.sync().then(()=>{
    myserver.start(process.env.PORT || 3000)
}
).catch(console.error)