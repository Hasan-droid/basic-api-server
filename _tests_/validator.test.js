'use strict'
const server=require('../server.js')
const supertest=require('supertest');
const request=supertest(server.app);

describe('validator status',()=>{
   

    it('200 status , valid query',async()=>{
        const query='hasan';
        const res=await request.get(`/person?name=${query}`);
        expect(res.body.name).toEqual(query);
        expect(res.status).toEqual(200);
    });

    it('500 status , invalid query',async()=>{
        const response=await request.get('/person?name')
        expect(response.status).toEqual(500);
    });

   
})