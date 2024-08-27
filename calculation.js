

// write a fuction and pass num1, num2, condition ex: (10,60,+)
// num1 zero with type
// num1 and num2 is same
// num1 > num2 
// num1 or num2 > 10 
// num1 and num2 >=10



// let con, r

// const result = (num1,num2,con) => {
//     if(con == "*"){
//          r= num1 * num2
//     if(con == "/"){
//          r= num1 / num2
//     }else if(con == "+"){
//          r= num1 + num2
//     }else if(con == "-"){
//          r= num1 - num2
//     }else{
//         console.log("Error")
//     }
//     return r
// }

const result = (num1, num2) => {
    if ((num1 && num2) >= 10) return "Both are above or equal to 10"
    if (num1 > 10 || num2 > 10) return "a value is above"
        if (num1 === "0") return "Diff Datatype"
    if (num1 == num2) return (num1 + " and " + num2 + " are same")
    if (num1 > num2) return (num1 + " is greater than " + num2)
    if (con == "*") return num1 * num2
    if (con == "/") return num1 / num2
    if (con == "+") return num1 + num2
    if (con == "-") return num1 - num2
    return "Invalid operator"
}
console.log(result(10, 12))

// console.log(result(7, 5, "{"))



// const result = (num1, num2, con) => {
//     switch (con) {
//         case "*": return num1 * num2
//         case "+": return num1 + num2
//         case "/": return num1 / num2
//         case "-": return num1 - num2
//     }
// }
// console.log(result(0, 2))