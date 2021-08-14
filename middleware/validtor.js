'use strict'
module.exports=(req , res , next)=>{
    if(`${Number(req.query.name)}`!=='NaN'){
        next("Warning:this is not a name")
    }
    else{
        next();
    }
}