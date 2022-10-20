/**
 * 2. 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
 * input: ['🍌', '🥝', '🍇', '🥝']
 * output: 2
 */
function countFruits(input,item){
    let count = 0;
    for(let i = 0; i < input.length; i++){
        if (input[i] === item){
            count++;
        }
    }
    console.log(count);
}
const array = ['🍌', '🥝', '🍇', '🥝'];
const item = '🥝';
countFruits(array,item);