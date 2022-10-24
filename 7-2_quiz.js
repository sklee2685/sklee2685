/**
 * 2. 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기, 고차함수 사용
 * input: ['🍌', '🥝', '🍇', '🥝']
 * output: 2
 * function countFruits(input,item){
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
 */

//1번째 방법
function countFruits1(array,item){
    return array.reduce((count,value)=>{
        if (value === item){
            count++;
        }
        return count;
    },0);
}
//2 번째 방법
function countFruits2(array,item){
    return array.filter((value) =>{
        return value ===item;
    }).length;
}
const array = ['🍌', '🥝', '🍇', '🥝'];
result1 = countFruits1(array,'🥝');
result2 = countFruits2(array,'🥝');
console.log(result1);
console.log(result2);
