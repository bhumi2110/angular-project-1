var marks=[34,66,72,99,20];
const processor=(p)=>{
    console.log(p)
}
marks.forEach(processor)
let result=marks.map((p)=>p*5)
console.log(result)
s=['a','b','c','d']
var e=s.map(s=>s.toUpperCase())
console.log(e)
function concat(a,b){
    return a +" "+b
}
function concat1(a){
    return a +" "
}
console.log(s.reduce(concat))
console.log(s.reduce(concat,'the string is:'))
console.log(s.reduce(concat1))
console.log(s.join(' '));
console.log(marks.join(' '))
console.log(marks=[...marks,4,5,6,7,8,9])