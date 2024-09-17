import {add,subtract} from '../math.js'
import {assert,expect} from 'chai'

describe('Math Functions', ()=>{
it('add test',()=>{
let result=add(4,5)
assert.equal(result,9)
expect(result).to.equal(9);
})
it('sub test',()=>{
    let result=subtract(5,4)
    assert.equal(result,1)
    expect(result).to.equal(1);
    })
})