// Output:
// *
// * *
// * * *
// * * * *
// * * * * *


// let limit =10
// let c=""
// for(i=0;i<=limit;i++){
//     c=c+"*"
//     console.log(c)
// }

// let limit =10
// let c=""
// let pat=""
// for(i=limit;i>=1;i--){
//     for(j=limit;j>=i;){
//         c=c+"*"
//     }
    
//     console.log(c)
// }

// const printRightTriangle=(limit) =>{
//     for (let i = 1; i <= limit; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '* ';
//         }
//         console.log(pattern);
//     }
// }
// printRightTriangle(5);

let limit =10
let k=limit

    let c=""
for (i=0;i<limit;i++){
 for(j=0;j<k;j++ ){
        c+="*"   
    }
    console.log(c)
    k=k-1
    c=""
}