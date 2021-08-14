'use strict'



const foodModel=(sql , data_type)=>{
    let food=sql.define('food',{
        foodName:{
            type:data_type.STRING,
            allowNull:false,
        },
        recipe:{
            type:data_type.STRING,
            allowNull:false
        }
    });

    return food;
};

module.exports=foodModel;