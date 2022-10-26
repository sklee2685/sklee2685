/**
 * 3. 배열1, 배열2 두개의 배열을 전달 받아,
 * 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
 * input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
 * output: ['🍌','🍇']
 */
function arrayCommonality(input,search){
    const array3 = [];
    for(let i = 0; i <input.length; i++){
        if (search.includes(input[i])){
            array3.push(input[i]);
        }
    }
    console.log(array3);
}
const array1 = ['🍌', '🥝', '🍇'];
const array2 = ['🍌', '🍓', '🍇', '🍓'];
arrayCommonality(array1,array2);
//arrayCommonality(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']);