
/** 
 * 주어진 숫자 만큼 0부터 순회하는 함수
 * 순회하면서 주어진 특정한 일을 수행해야 함
 * ex)
 * 최대값 5, 순회하는 숫자를 모두 출력
 * 최대값 5, 순회하는 숫자의 두배 값을 출력
 * 
 * hint) function iterate(max, action)
 */
// 내가 만든 코드
//  let print = (max) => {
//     for (let i = 1; i <= max; i++){
//         console.log(i);
//     }
// };

// let printMul = (max) => {
//     for(let i = 1; i <= max; i++){
//         console.log(i*2);
//     }
// };

// function iterate(max, action) {
//     const result = action(max);
//     console.log(result);
// };

// iterate(5,print);
// iterate(5,printMul);

// 해설 보고 보안한 코드
let print = (max) => {
    console.log(max);
};

let printMul = (max) => {
    console.log(max*2);
};

function iterate(max, action) {
    for (let i = 1; i <= max; i++){
        action(i);
    }
};

iterate(5,print);
iterate(5,printMul);