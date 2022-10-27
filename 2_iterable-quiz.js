// [Symbol.iterator]():Iterator를{next():{value,done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
// 입력: 0,1,2,3...,9
// 출력: 0,2,4,6...,18

const multiple ={
    [Symbol.iterator]() {
        const max = 10;
        let num = 0;
        return {
            next(){
                return {value: num++*2 ,done: num>max }
            },
        };
    },
};
for(const nums of multiple) {
    console.log(nums);
}   
