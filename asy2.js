async function one(){
    return Promise.resolve("hi")
}
one().then((value) => console.log(value)) // ||=> hi
// console.log(one()); ||=> Promise { <pending> }