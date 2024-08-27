const data = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}


const romanToNumber = (params) => {

    return data[params]
} 

console.log(romanToNumber("X"))