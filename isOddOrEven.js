
//  target =100
// if the number is  even number print "is even: num"
// if the number is odd number print "is even : num"
const isOddOrEven = () => {
    for (let tar = 1; tar <= 100; tar++) {
        if ((tar % 2) == 0) console.log("Is even: " + tar) 
        if ((tar % 2) != 0) console.log("Is odd: " + tar) 
    }
}
isOddOrEven()