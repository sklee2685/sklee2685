/**
 * 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
 * 단, 주어진 배열을 수정하지 않도록!
 * input: ['🍌', '🍓', '🍇', '🍓']
 * output: ['🍌', '🥝', '🍇', '🥝']
 */
function changeFruits(input){
    const chageArray = Array.from(input);
    for (let i = 0; i < chageArray.length; i++){
        if (chageArray[i] === '🍓'){
            chageArray[i]='🥝';
        }
    }
    console.log(chageArray);
}
const array = ['🍌', '🍓', '🍇', '🍓'];
console.log(array);
changeFruits(array);

// 재사용성 높이기

// function changeFruits(input, from, to){
//     const chageArray = Array.from(input);
//     for (let i = 0; i < chageArray.length; i++){
//         if (chageArray[i] === from){
//             chageArray[i] = to;
//         }
//     }
//     console.log(chageArray);
// }
// const array = ['🍌', '🍓', '🍇', '🍓'];
// changeFruits(array,'🍓','🥝');