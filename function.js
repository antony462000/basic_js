// const temp = [27, 28, 30, 40, 42, 35, 30];


// temp.map((item)=>{
//     console.log(item)
// })

// temp.map((item) =>console.log(item))


// function abc() {
//     console.log("function called")
// }

// abc()

// const abc = () => {
//     console.log("function called")
// }

// abc()
// const points = [40, 100, 1, 5, 25, 10];
// points.sort()
// console.log(points)


// const numbers = [45, 4, 9, 16, 25];
// let txt = "";


// const myFunction=(value, index, array)=> {
//     try {
//         //  txt += value + "<br>"
//           throw new Error("hey heyoo error")
//     } catch (error) {
//         console.log(error.message)
//     }
 
// }

// numbers.forEach(myFunction);
// console.log(txt)

class car {
    constructor(name,year){
        this.Name = name
        this.Year = year
    }
    // let age = (x) => x - this.Year
    age(x) {
        return x - this.Year
    }
}
const date = new Date()
let year = date.getFullYear()

const mycar  = new car("Ford", 2017)
console.log("Car Age : " +mycar.age(year))
console.log('Hello World');
console.log(process.argv.slice(2));
