/**
 * 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
 * 단, 주어진 배열을 수정하지 않도록!, 고차함수 사용
 * input: ['🍌', '🍓', '🍇', '🍓']
 * output: ['🍌', '🥝', '🍇', '🥝']
 * function changeFruits(input){
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
 */

function changeFruits(array,from,to){
    return array.map((item)=>{
        return item === from ? to : item;
        // if(item === from){
        //     return to;
        // }else{
        //     return from;
        // }
    });
}
const array = ['🍌', '🍓', '🍇', '🍓'];
result = changeFruits(array,'🍓','🥝');
console.log(result);