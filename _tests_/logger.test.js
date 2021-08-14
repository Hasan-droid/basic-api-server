'use strict'
const logger=require('../middleware/logger');

describe('logger midleware' , ()=>{

    let spy;
    let req={};
    let res={};
    let next=jest.fn();

    beforeEach(()=>{
        spy=jest.spyOn(console , 'log').mockImplementation();
    });

    // afterEach(()=>{
    //     spy.mockRestore();
    // });

    it('logs works , outputs are catched',()=>{
        logger(req , res , next);
        expect(spy).toHaveBeenCalled();
    })

    it('logs works , Moves to the next',()=>{
        logger(req , res , next);
        expect(next).toHaveBeenCalled();
    })
})