// let gangs = ['wawwawwa', 'ganganga','freeez','greatest','hyena'];

// console.log('Map:');
// newGangs= gangs.map((gang)=>{
//     console.log(gang)
//     return gang
// })
// console.log(newGangs)
// let fullName = {
//     firstName: 'Lithakazi',
//     lastName: 'Sikwana',
// }
// const {firstName, lastName} = fullName;

// console.log(firstName);
// console.log(lastName);

// let user = [{
//     firstName:'John ',
//     lastName:'Reilly'
// },
// (user) =>{
//     console.log('I set the user:', user);
// }
// ]

// let [newUser, setUser] = user;
// console.log(newUser);
// setUser({firstName: 'Litha', lastName:'HotStuff!'});

// let promise = new Promise ((resolve,reject)=> {
//     setTimeout(()=>{
//         // resolve({
//         //     firstName: 'Lithakazi',
//         //     lastName: 'Sikwana'
//         // });
//         reject('Something went wrong');
//     },1000)
// })
// promise.then((response)=>{
//     console.log('Here is the response after 1s!')
// }).catch((error)=>{
//     console.log(error);
// })
// console.log('This is the 1 part');

let userPromise = fetch('https://randomuser.me/api/');
        console.log(userPromise);
    userPromise.then((response ) =>{
        console.log(response.json);
        return response.json();
    }).then((resData)=>{
        console.log(resData.results[0].name.first);
        console.log(resData.results[0].name.last);
    })