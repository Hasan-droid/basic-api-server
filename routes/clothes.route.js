'use strict';

const express=require('express');

const { clothes } = require('../models');
const router=express.Router();

router.get('/clothe',getAll);
router.get('/clothe/:id',getOne)
router.post('/clothe',addOne);
router.put('/clothe/:id',changeOne);
router.delete('/clothe/:id',deleteOne);

async function getAll(req , res){
 let clothe= await clothes.findAll();
 res.status(200).json(clothe);
}

async function getOne(req , res){
   let id=parseInt(req.params.id);
   let recivedItem=await clothes.findOne({where :{id:id}});
   res.status(200).json(recivedItem);
}

async function addOne(req , res){
   let new_clothe=req.body;
   let clothe = await clothes.create(new_clothe);
   res.status(200).json(clothe); 
}

async function deleteOne(req , res){
 let id = parseInt(req.params.id)   ;
 let deletedItem=await clothes.destroy({where:{id : id}});
 res.status(200).json(deletedItem); 
}

async function changeOne(req , res){
   let id =parseInt(req.params.id);
   let body=req.body;
   let found=await clothes.findOne({where : {id:id}});
   let updatedItem=await found.update(body);
   res.status(200).json(updatedItem);  
}

module.exports=router



