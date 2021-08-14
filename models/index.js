'use strict';

const POSTGRES_URL="postgres://localhost:5432/basicdatabase";
const{Sequelize , DataTypes}=require('sequelize');
const food_model=require('./food.model');
const clothes_model=require('./clothes.model');

let sql=new Sequelize(POSTGRES_URL , {});

module.exports={
    foods:food_model(sql , DataTypes),
    clothes:clothes_model(sql , DataTypes),
    db:sql
}