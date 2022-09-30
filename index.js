// const num = 100,
//   arr = [];

// // /* code from here */
// for (let i = 1; i <= num; i++) {
//   if (i % 3 == 0 && i % 4 == 0) {
//     arr.push("devsnest");
//   } else if (i % 3 == 0) {
//     arr.push("dev");
//   } else if (i % 4 == 0) {
//     arr.push("nest");
//   }
// }
// console.log(arr);
// count number d presenr in a string
// var randomString="devsnest";
// var countOfD = 0
// /* start code here: */
// for(let i =0; i<randomString.length; i++){
//   if(randomString[i]=="d"){
//     countOfD++;
//   }
// }
// console.log(countOfD);

let n=121;
let palin=0;
for(let i=n.length; i>=0; i--){
    palin.push(n[i]);
}
console.log(palin);
