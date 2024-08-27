console.log("hey")

let input = [1, 2, 3, 4, 5, [1, 2]]; 

let array_object = [
    { name: "a", age: 15 },
     { name: "b", age: 18 },
     { name: "a", age: 15 },
     { name: "b", age: 10 },
     { name: "a", age: 15 },
     { name: "b", age: 11 },
     { name: "a", age: 15 },
     { name: "b", age: 18 }
    ]

    console.log("array_object1",array_object)


 array_object.map((item) => {
    if(item.age>=18){
        item['is_old']=true
    }else{
        item['is_old']=false
    }
   
})

console.log("array_object2",array_object)
