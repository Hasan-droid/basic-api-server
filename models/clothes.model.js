'use strict'



const clotherModel=(sql , data_type)=>{
    let clothes=sql.define('clothes',{
        merchName:{
            type:data_type.STRING,
            allowNull:false,
        },
        material:{
            type:data_type.STRING,
            allowNull:false
        }
    });

    return clothes;
};

module.exports=clotherModel;