// object literal { key: value }
// key -> 문자, 숫자, 문자열, 심볼
// value -> 원시값, 객체(함수)
let apple ={
    name: 'apple',
    'hello': '✋',
    0:1,
    ['hello-bye']: '✋',
};
// 속성, 데이터에 접근하기 위해서는 .을 사용해 접근하거나(dot notation)
// 대괄호를 사용해 접근(bracket notation)이 가능하다.
console.log(apple.name);
console.log(apple.hello);
console.log(apple['hello-bye']); // key값에 -이 포함되어있으면 대괄호를 사용한 접근만 가능하다.

//속성 추가
apple.emoji = '🍎';
console.log(apple);
console.log(apple.emoji);
console.log(apple['emoji']);

// new object()
// object.create();