let arr = [1, 2, 7, 7, 7, 7, 70]
let k = 5

let n = k
let j = 0
len = arr.length
limit = (len / k) + 1

let finArr = [],newArr = [],sumArr=[]


sum=0
if (k<=arr.length){
    for (i = 1; i <= limit; i++) {
        newArr = arr.slice(j, n)
        if (newArr.length != 0) {
            finArr.push(newArr)
        }
        j = j + k
        n = n + k
    }
    if (newArr.length != k) {
        finArr.pop()
        arr.reverse()
        newArr = arr.slice(0, k)
        finArr.push(newArr)
    }
    finArr.map((_)=>{
        for(let i=0;i<_.length;i++){
            sum=sum + _[i]   
        }
        sumArr.push(sum)
        sum=0
    })
    lar=sumArr[0]
    for(i=0;i<sumArr.length;i++){
        if(sumArr[i]>lar) {
            lar= sumArr[i]
        }
    }
    
    console.log(finArr)
    console.log(sumArr)
    console.log(lar)
}
else{
    console.log("ERROR")
}
