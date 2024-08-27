// function doSomething(a) {
//     console.log('Doing something...');
//     a();
// }

// function onComplete() {
//     console.log('Callback function executed.');
// }

// doSomething(onComplete);



function a (num1,num2,callback){
    let sum= num1+num2
    callback(sum)
}

function b (sum){
    console.log("Sum is ",sum
     )
}

a(3,4,b)


