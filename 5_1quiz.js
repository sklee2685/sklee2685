/**
 * 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
 * 단, 주어진 배열을 수정하지 않도록!
 * input: ['🍌', '🍓', '🍇', '🍓']
 * output: ['🍌', '🥝', '🍇', '🥝']
 */
function changeFruits(input){
    for (let i = 0; i < input.length; i++){
        if (input[i]=='🍓'){
            input[input.indexOf('🍓')]='🥝';
        }
    }
    console.log(input);
}
changeFruits(['🍌', '🍓', '🍇', '🍓']);