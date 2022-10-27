// const multiple ={
//     [Symbol.iterator]() {
//         const max = 10;
//         let num = 0;
//         return {
//             next(){
//                 return {value: num++*2 ,done: num>max }
//             },
//         };
//     },
// };
// for(const nums of multiple) {
//     console.log(nums);
// }

fuction* multipleGenerator() {
    for (let i = 0; i < 10; i++) {
        yield
    }
}