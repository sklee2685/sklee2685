// [Symbol.iterator]():Iterator를{next():{value,done}};
// 이전에 했던 퀴즈 코드 생산성 높인.ver
/**
 * initalValue: 초기값
 * maxValue: 최대값
 * callback: 콜백함수
 */


function makeIterator(initalValue,maxValue,callback){
    return{
        [Symbol.iterator]() {
            let num = initalValue;
            return {
                next(){
                    return {value: callback(num++) ,done: num>maxValue }
                }
            }
        },
    }
}
const multiple = makeIterator(0,20,(num)=> num *2);
for(const nums of multiple) {
    console.log(nums);
}
