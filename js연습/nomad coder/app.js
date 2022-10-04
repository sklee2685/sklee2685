// function hello(name,age){
//     console.log("Hello my name is "+name+"\nI am "+age+" years old");
// }

// hello("Hong",22);

// function plus(a,b){
//     console.log(a+b);
// }

// plus(2,5);

// const player={
//     name:"Lee",
//     sayHello: function(name){
//       console.log("hello!"+name);
//     },
//   };
  
//   console.log(player.name);
//   player.sayHello(player.name);

// const calculator={
//     add: function(a,b){
//         return (a + "+" + b + "=" + (a+b));
//     },
//     sub: function(a,b){
//         return (a + "-" + b + "=" + (a-b));
//     },
//     div: function(a,b){
//         return (a + "/" + b + "=" + a/b);
//     },
//     mul: function(a,b){
//         return (a + "*" + b + "=" + a*b);
//     },
//     squ: function(a,b){
//         return (a + "^" + b + "=" + a**b);
//     },
// };
// calculator.add(4,9)
// calculator.sub(9,2)
// calculator.div(9,3)
// calculator.mul(4,9)
// calculator.squ(4,2)

// const age=20;
// function calculatorKrage(ageOfForeigner){
//     return ageOfForeigner+2;
// }

// const krAge=calculatorKrage(age);

// console.log(krAge);

// const age= parseInt(prompt("how old are you?"),10);

// if (isNaN(age)){
//     console.log("숫자로 입력해주세요");
// }else{
//     console.log("나이를 입력해주셔서 감사합니다 \n입력하신 나이: "+age);
// }

// const age= parseInt(prompt("how old are you?"),10);

// if (isNaN(age)){
//     console.log("Please write a number");
// }else if (age <18){ 
//     console.log("You are too young.");
// }else if(age >= 18 && age <=50){
//     console.log("You can drink");
// }else if(age > 50 && age <= 80){
//     console.log("You should exercise");
// }else if (age>80){
//     console.log("You can do whatever you want");
// }

// const title=document.getElementById("title");
// title.innerHTML="Got you!";

// console.log(title.id);
// console.log(title.className);

const hello =document.getElementsByClassName("hello");

console.log(hello);
