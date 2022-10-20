/**
 * 3. 배열1, 배열2 두개의 배열을 전달 받아,
 * 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
 * input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
 * output: ['🍌','🍇']
 */
const array3 = [];

function arrayCommonality(array1,array2){
    for(let i = 0; i <4; i++){
        if (array1[i]==array2[i]){
            array3.push(array1[i]);
        }
    }
    console.log(array3);
}
arrayCommonality(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']);