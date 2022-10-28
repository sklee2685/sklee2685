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

function* multipleGenerator() {
    for (let i = 0; i < 10; i++) {
        yield i ** 2 ;
        // yield는 사용자가 next를 호출해야 그 다음 코드로 넘어가 순회하고,
        // 다시 기달렸다가 next를 호출해야함(=사용자한테 제어권을 넘겨줌)
    }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value,next.done);

next = multiple.next()
console.log(next.value,next.done);

// next를 더이상 하지 않을때 사용 이걸 사용하면 done값이 true로 바뀜
//multiple.return();

// 에러를 인위적으로 발생시킬 수 있음
//multiple.throw('Error');

next = multiple.next();
console.log(next.value,next.done);