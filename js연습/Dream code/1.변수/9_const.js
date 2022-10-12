// 재할당이 가능한 let
let a = 1;
console.log(a);
a = 2;
console.log(a);

// 하지만 const는 재할당이 불가능
// 상수 또는 상수변수 혹은 그냥 변수라고 부르기도함
const hi = 'hello';
console.log(hi);
text = 'hi';
console.log(hi);

//const 사용법

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당이 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
};
console.log(apple);
apple.name='orange';
apple.color = 'orange';
console.log(apple);
