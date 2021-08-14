'use strict'
const server=require('../server');

const supertest=require('supertest');

const request=supertest(server.app);

let test_object={
    foodName:"shwarma",
    recipe:"good recipe"
}

let spy;
beforeEach(()=>{
    spy=jest.spyOn(console , 'log').mockImplementation();
});

describe('my API Server runs' , ()=>{

   
    it('handles not found request' , async()=>{
        const response = await request.get('/asd');
        expect(response.status).toEqual(404);
    });

    it('handles my internal server errors' , async()=>{
        const response=await request.post('/bad');
        expect(response.status).toEqual(500);
    })

    it('get data from /data' , async()=>{
        const response=await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object')
    })

    it('/ route works yay!!!!' , async()=>{
        const response=await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('this is home page , hello im live')
    })

  
});

describe('FOOD API',()=>{
    let object={
        foodName:'shawrma',
        recipe:'shut up when you gonna open a fucken resturant will talk then'
    }

    let id=2;

    it("TEST getAll()",async()=>{
        const response= await request.get('/food');
        expect(response.status).toEqual(200);
    })

    it("TEST getOne()",async()=>{
        const response= await request.get(`/food/${id}`);
        expect(response.status).toEqual(200);
    })

    it("TEST addOne",async()=>{
        const response = await request.post('/food').send(test_object);
        console.log(response.body);
        expect(response.status).toEqual(200);
    })

    it("TEST deleteOne ",async()=>{
        const response=await request.delete(`/food/${id}`);
        expect(response.status).toEqual(200);
    })

    it('TEST changeOne' , async()=>{
        const response = await request.put(`/food/3`).send(test_object);
        expect(response.status).toEqual(200)
    })
})

describe('Clothes API',()=>{
    let test_object={
        merchName:'nicke',
        material:'leather'
    }

    let id=1;

    it("TEST getAll()",async()=>{
        const response= await request.get('/clothe');
        expect(response.status).toEqual(200);
    })

    it("TEST getOne()",async()=>{
        const response= await request.get(`/clothe/${id}`);
        expect(response.status).toEqual(200);
    })

    it("TEST addOne",async()=>{
        const response = await request.post('/clothe').send(test_object);
        console.log(response.body);
        expect(response.status).toEqual(200);
    })

    it("TEST deleteOne ",async()=>{
        const response=await request.delete(`/clothe/-1`);
        expect(response.status).toEqual(200);
    })

    it('TEST changeOne' , async()=>{
        const response = await request.put(`/clothe/${id}`).send(test_object);
        expect(response.status).toEqual(200)
    })
})
