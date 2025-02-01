// Array Methods
// 1. Filter, Some, and Every
// Filter out all numbers greater than 50.

const numbers = [12, 55, -2, 90, 33, -77, 18];
let op1=numbers.filter((x)=>{
    return x>50
})
console.log(op1)

// Check if there is at least one negative number.

// const numbers = [12, 55, -2, 90, 33, -77, 18];

let op2=numbers.some((x)=>{
    return x<0
})
console.log(op2)

// Check if all the numbers in the filtered array are even.

// const numbers = [12, 55, -2, 90, 33, -77, 18];

let op3=op1.every((x)=>
{
    return x%2==0
})
console.log(op3)

// 2. Sort, Reverse, and Reduce
// Sort the fruits array in alphabetical order.

const fruits = ['banana', 'apple', 'grape', 'kiwi', 'orange'];
let op4=fruits.sort()
console.log(op4)

// Reverse the order of the numbers array.

const num =[10, 20, 30, 40, 50];
let op5=num.reverse((a,b)=>{
    console.log(a,b);
    
    return a-b
})
console.log(op5)

// Find the sum of the reversed numbers array using reduce.

let op6=op5.reduce((total,value,y,z)=>{
    return total+value
    
})
console.log(op6)

// 3. ReduceRight and Filter

//    Take an example array -

// Concatenate the words in reverse order using reduceRight.

let arr = ['banana', 'apple', 'grape', 'kiwi',"pen","oka",'orange'];
let op7 = arr.reduceRight((total, value) => {
    return total+" , "+value
})
console.log(op7);


// Filter out words that have greater than or equal to 5 characters.

// let arr=["Java","javascript","Html","react","nodejs"]
let op8=arr.filter((x,y,z)=>{
    return x.length>=5
})
console.log(op8);

// Object methods
// Merge the properties of obj1 and obj2 using Object.assign.

// let obj1=[{name:"tejasiwni",gender:"female",age:"22"}]
// let obj2=[{son_name:"allampally"},{city:"hyd"}]
// let op9=Object.assign(obj1,obj2,{fav:"apple"})
// console.log(op9)

let obj1=[{name:"tejasiwni",gender:"female",age:"22"}]
let obj2=[{son_name:"allampally"},{city:"hyd"}]
let opp=Object.assign(...obj1,...obj2)
console.log(opp)

// Freeze the merged object using Object.freeze and try to update that freeze object.

let colors=[{col1:"red"},{col2:"green"},{col3:"yellow"},{col4:"greay"}]
Object.freeze(colors)
console.log(colors)
colors["col2"]="violet";
console.log(colors)
delete colors.col4;
console.log(colors)

// Seal the object using Object.seal.
let obj4=Object.seal(opp)
console.log(obj4)
obj4["age"]="30"
console.log(obj4)
obj4=Object.assign({color:"yellow"})
console.log(obj4)
delete obj4.color
console.log(obj4)

let obj3=[{name:"tejasiwni",gender:"female"}]
Object.seal(obj3)
let check=Object.isSealed(obj3);
console.log(check)

let check2=Object.isSealed(opp);
console.log(check2)
