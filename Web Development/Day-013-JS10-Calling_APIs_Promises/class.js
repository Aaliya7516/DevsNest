// >>> ------ INPUT -------
// var promise = new Promise(()=>{});
// console.log(promise);
// >>> ------ OUTPUT -------
// Promise {<pending>}
// __proto__: Promise
// catch: ƒ catch()
// constructor: ƒ Promise()
// finally: ƒ finally()
// then: ƒ then()
// Symbol(Symbol.toStringTag): "Promise"
// __proto__: Object
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

///// >>>>>>>>>>>> PENDING / RESOLVE / REJECT <<<<<<<<<<<<<<<
// pending:promise in process 
// resolve: completed promise
// reject: rejected promise
//  --------- >>> promise runs without calling ((ASYNCRONOUSLY***))


// >>> ------ INPUT ------
// var promise = new Promise(()=>{
//     console.log("Hey there!!!")
// });
// console.log(promise);
// >>> ----- OUTPUT ------
// Hey there!!!
// Promise {<pending>}

// >>> ------ INPUT ------
// var promise = new Promise((resolve, reject)=>{
//     let a = 1+1;
//     if (a=== 2){
//         resolve();
//     }else{
//         reject();
//     }
// });
// console.log(promise)
// >>> ----- OUTPUT ------
// Promise {<fulfilled>: undefined}
// __proto__: Promise
// catch: ƒ catch()
// constructor: ƒ Promise()
// finally: ƒ finally()
// then: ƒ then()
// Symbol(Symbol.toStringTag): "Promise"
// __proto__: Object
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

// >>> ------ INPUT ------
// var promise = new Promise((resolve, reject)=>{
//     let a = 1+1;
//     if (a=== 3){
//         resolve();
//     }else{
//         reject();
//     }
// });
// console.log(promise)
// >>> ----- OUTPUT ------
// >>Promise {<rejected>: undefined}
// __proto__: Promise
// catch: ƒ catch()
// constructor: ƒ Promise()
// finally: ƒ finally()
// then: ƒ then()
// Symbol(Symbol.toStringTag): "Promise"
// __proto__: Object
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: undefined
// >>Uncaught (in promise) undefined

// >>> ------ INPUT ------
// var promise = new Promise((resolve, reject)=>{
//     let a = 1+1;
//     if (a=== 2){
//         resolve("Promise Resolved");
//     }else{
//         reject("Promise Rejected");
//     }
// });
// promise
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// >>> ----- OUTPUT ------
// Promise Resolved

// >>> ------ INPUT ------
// var promise = new Promise((resolve, reject)=>{
//     let a = 1+1;
//     if (a=== 3){
//         resolve({
//             "success":true
//         });
//     }else{
//         reject({
//             "success":false
//         });
//     }
// });
// promise
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// >>> ----- OUTPUT ------
// {success: false}

////////// >>>>>>>>>>>>>>>>> CALL API <<<<<<<<<<<<<<<<<<<

// console.log(fetch("https://api.github.com/users/Aaliya7516"));
// >> Promise {<pending>}

// fetch("https://api.github.com/users/Aaliya7516")
// .then(data => console.log(data))
// >> Response {type: "cors", url: "https://api.github.com/users/Aaliya7516", redirected: false, status: 200, ok: true, …}

// fetch("https://api.github.com/users/Aaliya7516")
// .then(data => console.log(data.json()))
// >> Promise {<pending>}

// fetch("https://api.github.com/users/Aaliya7516")
// .then(res => res.json())
// .then(data => console.log(data))
// >> {login: "Aaliya7516", id: 53328555, node_id: "MDQ6VXNlcjUzMzI4NTU1", avatar_url: "https://avatars.githubusercontent.com/u/53328555?v=4", gravatar_id: "", …}


// fetch("https://api.github.com/users/Aaliya75916")
// .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Something went wrong');
//     }
//  })
//  .then((responseJson) => {
//     console.log(responseJson)
//  })
//  .catch((error) => {
//     console.log(error)
//   });
// >> >> GET https://api.github.com/users/Aaliya75916 404
// Error: Something went wrong
//     at class.js:142

////////// >>>>>>>>>>>>>>>>> ASYNC / AWAIT <<<<<<<<<<<<<<<<<<<

// async function hello(){
//     console.log("Hello World");
// }
// var greet = hello();
// console.log(greet);
// >> Hello World
// >> Promise {<fulfilled>: undefined}

// async function hello(){      // this will call the function asyncronously!!!
//         return "Hello!!!"
//     }
// var greet = hello();
// greet
// .then((data)=> console.log(data))
// >> Hello!!!

// async function hello(){
//     const res = fetch("https://api.github.com/users/Aaliya7516");
//     console.log(res);
// }
// >> <nothing>

// async function hello(){
//     const res = fetch("https://api.github.com/users/Aaliya7516");
//     console.log(res);
// }
// var greet = hello();
// >> Promise {<pending>}

// async function hello(){
//     const res = await fetch("https://api.github.com/users/Aaliya7516");
//     // await: waits for the data then goes to next line
//     console.log(res);
// }
// var greet = hello();
// >> Response {type: "cors", url: "https://api.github.com/users/Aaliya7516", redirected: false, status: 200, ok: true, …}

// async function hello(){
//     const res = fetch("https://api.github.com/users/Aaliya7516");
//     res.then((data)=> console.log(data));
//     console.log(res);
// }
// var greet = hello();
// >> Response {type: "cors", url: "https://api.github.com/users/Aaliya7516", redirected: false, status: 200, ok: true, …}

// async function hello(){
//     let res = await fetch("https://api.github.com/users/Aaliya7516");
//     res = await res.json();
//     console.log(res);
// }
// var greet = hello();
// >> {login: "Aaliya7516", id: 53328555, node_id: "MDQ6VXNlcjUzMzI4NTU1", avatar_url: "https://avatars.githubusercontent.com/u/53328555?v=4", gravatar_id: "", …}

// async function hello(username){
//     let data = await fetch(`https://api.github.com/users/${username}`);
//     data = await data.json();
//     console.log(data);
// }
// var greetMe = hello("Aaliya7516"); /// calling the function
// >> {login: "Aaliya7516", id: 53328555, node_id: "MDQ6VXNlcjUzMzI4NTU1", avatar_url: "https://avatars.githubusercontent.com/u/53328555?v=4", gravatar_id: "", …}

////// >>>>>>>>> BROWSER CACHING <<<<<<<<<<<<

// when browser wisits the site for the first time, it stores
//  images and videos in cache memory, and when user sends request
// for the next times, it fetches data from cache memory.

// we specify duration of cache and some other properties through code.

////// >>>>>>>>> LOCAL STORAGE <<<<<<<<<<<<
// to store data in perticular browser even after shutting down the system
// localStorage.setItem('user', "the_stranger") // data= Key:user; Value:the_stranger
// localStorage.removeItem('user') // removes the data with key 'user'
// console.log(localStorage.getItem('user'))  // the_stranger

// both data are stored under: devtools > Application > Storge

////// >>>>>>>>> SESSION STORAGE <<<<<<<<<<<<
// to store data only for perticular tab
// sessionStorage.setItem('user', "the_stranger") // data= Key:user; Value:the_stranger
// localStorage.removeItem('user') // removes the data with key 'user'
// console.log(sessionStorage.getItem('user'))  // the_stranger

// fetch('https://discord.com/api/webhooks/860130670855454720/c4uHpYRri1LxGGBYsMUoKgzRzzx8RUMT-0OdcWVz5zRJaFXOKGOBsKWFcEG6So39L66M') // webhook link of discord
// .then(res => res.json())
// .then(data => console.log(data)) // data of the discord server

// fetch('https://discord.com/api/webhooks/860130670855454720/c4uHpYRri1LxGGBYsMUoKgzRzzx8RUMT-0OdcWVz5zRJaFXOKGOBsKWFcEG6So39L66M',
// {
//     method: "POST",
//     method: 'post',
//     headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({'content': 'Hello World!!!'})
// })
// .then(res => res.json())
// .then(data => console.log(data))
//  >> SENDS 'Hello World!!!' to the selected channel










