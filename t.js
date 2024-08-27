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
        age: 21,
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

const findFilterBaseCount = (data, filter) => {
    if (!filter) return data.length
    let count = 0
    data.map((item) => {
        if (item[filter]) count++
    })
    return count
}


// 1)find total form submitter users
// let total_submitted_users = findFilterBaseCount(users, false)
// console.log("total_submitted_users", total_submitted_users)

// 2)add a key is_qualified above 60 age person is_qualified:false else true
// users.map((item) => {
//     if (item.age > 60) item.isQualified = true
//     else item.isQualified = false
// })
// console.log("keyAdded", users)

// 3)find total quaified user and un qualified
// let quaified = findFilterBaseCount(users, "isQualified")
// let uquaified = users.length - quaified
// console.log("quaified", quaified)
// console.log("uquaified", uquaified)


// 5)group same age and same place persons with count
const sameAge = users.reduce((grouped, users) => {
    const key = users.age
    if (!grouped[key]) {
        grouped[key] = []
    }
    grouped[key].push(users)
    return grouped
}, {}
)

Object.keys(sameAge).map((_) => {
    let result = findFilterBaseCount(sameAge[_], false)
    if(result>1){
        let sAge = sameAge[_]
        const samePlace = sAge.reduce((placeGrouped,sAge) =>{
            const keyPlace = sAge.place
            if(!placeGrouped[keyPlace]){
                placeGrouped[keyPlace] = []
            }
            placeGrouped[keyPlace].push(sAge)
            return placeGrouped
        },{})
        Object.keys(samePlace).map((_) => {
            let presult = findFilterBaseCount(samePlace[_], false)
            if(presult>1){
                let finarray= samePlace[_]
                let r=[] 
                console.log(finarray[0].place,presult, finarray)
            }
          
        })
    }
     
})

// 4)group data age,place,qualification based and find counts
// Object.keys(sameAge).map((f) => {
//     let result = findFilterBaseCount(sameAge[f], false)
//     if(result>1)
//         {let sol = sameAge[f].map(item=>{

//             const samePlace = users.reduce((groupedPlace, sameAge) => {
//                 const keyPl = sameAge.age
//                 if (!groupedPlace[keyPl]) {
//                     groupedPlace[keyPl] = []
//                 }
//                 groupedPlace[keyPl].push(samePlace)
//                 return groupedPlace
//             }, {})
//             console.log("+++++++", samePlace)
            // const samePlace = users.reduce((grouped, users) => {
            //     const pkey = users.place
            //     if (!grouped[pkey]) {
            //         grouped[pkey] = []
            //     }
            //     grouped[pkey].push(users)
            //     return grouped
            // }, {})
            // Object.keys(samePlace).map((_) => {
            //     let presult = findFilterBaseCount(sameplace[_], false)
            //     console.log(`place ${_}`, presult)
        // console.log(f,item.place)

// })
//     }})
    
    



