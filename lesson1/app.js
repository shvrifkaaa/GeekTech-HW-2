// const letter = '1234567890'

// const regExp = /\w/g;

// console.log(letter.replace(regExp, '*'));


// let phoneInput = document.querySelector('#phoneInput');
// let phoneCheck = document.querySelector('.phoneCheck')
// let phoneResult = document.querySelector('span');

// const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}/;

// phoneCheck.addEventListener('click', () => {
//     console.log(phoneInput.value);
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerText = "ok";
//         phoneResult.style.color = 'green';

//     } else {
//         phoneResult.innerText = 'Not ok';
//         phoneResult.style.color = 'red'
//     }
// })

// const peopleObj ={
//     Jhon: {
//         age: 21,
//         parents:{
//             Tony: {
//                 age: 50,
//                 parents : {
//                     Alex: {
//                         age: 75,
//                     },
//                 }
//             },
//             Kelly: {
//                 age: 40
//             },
//         },
//     },
//     Sam: {
//         age: 15,
//         parents: {
//             Jihn: { 
//                 age: 35,
//             }
//         }
//     }
// }

// const parentList = (obj) => { 
//     if(obj.parents){
//         for(let key in obj.parents){
//             console.log(key);
//             parentList(obj.parents[key])            
//         }
//     }else {
//         console.log('...oops');
//     }
// }

// for (let key in peopleObj){
//     parentList(peopleObj[key])
// }
