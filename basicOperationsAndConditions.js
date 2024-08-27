let users = [
    {
      name: "kumar",
      age: 21,
      place: "ekm",
      qualification: "10",
    },
    {
      name: "pk",
      age: 50,
      place: "kannur",
      qualification: "+2",
    },
    {
      name: "kkk",
      age: 10,
      place: "palakkad",
      qualification: "09",
    },
    {
      name: "pks",
      age: 35,
      place: "kollam",
      qualification: "degree",
    },
    {
      name: "jk",
      age: 23,
      place: "ekm",
      qualification: "degree",
    },
    {
      name: "falcon",
      age: 65,
      place: "tvm",
      qualification: "08",
    },
    {
      name: "llk",
      age: 75,
      place: "kkd",
      qualification: "05",
    },
    {
      name: "alan",
      age: 21,
      place: "kannur",
      qualification: "pg",
    },
    {
      name: "ghad",
      age: 21,
      place: "kannur",
      qualification: "degree",
    },
    {
      name: "dfdf",
      age: 20,
      place: "kkd",
      qualification: "pd",
    },
  ];
  
 

 


   // 1)find total form submitter users
  let len =users.length
  console.log(len)

    // 3)add a key is_qualified above 60 age person is_qualified:false else true
//   console.log(  Array.isArray(users))
  users.map((item) => {
    if(item.age>60) {
        item.isQualified= "True"
    }else{
        item.isQualified= "False"
    }
  })
//   console.log(users)

  // 4)find total quaified user and un qualified
    let i=0
    let j=0
    users.map((item)=>{
    
    if(item.isQualified=="True"){
        i++
        isQualifiedCount=i
    }
    if(item.isQualified=="False"){
        j++
        isNotQualified=j
    }
    }
)
// console.log("isQualified "+ i + " isNotQualified "+ j)


  // 2)group data age,place,qualification based and find counts
let arrPlace = []
users.map((item)=>{
    if(item.place=="kkd"){
        arrPlace.push(item)
    }

    
})

// const groupAge = Object.groupBy(users, ({age})=> age)
// console.log( arrPlace )
// console.log( "Kakkkanad" )
// console.log(arrPlace.length)

 // 5)group same age and same place persons with count
//  const sameAge = Object.groupBy(users,({age}) => age)
//  console.log(sameAge)

// const sameAge = users.reduce((grouped, user) => {
//     const key = user.age;
//     if (!grouped[key]) {
//         grouped[key] = [];
//     }
//     grouped[key].push(user);
//     return grouped;
// }, {});
const sameAge = users.reduce((grouped,users)=> {
    const key = users.age
    if(!grouped[key]){
        grouped[key] = []
    }
    grouped[key].push(users)
    return grouped
},{})

console.log(sameAge['21'].length);
