// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
console.log(a);
console.log(b+" b값 재할당 전");
b=2;
console.log(b+" b값 재할당 후");

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let myName = {
    name: 'lee',
}
let yourName = myName;

console.log(yourName);

myName.name='kim';
console.log(yourName); // myName의 객체값을 수정했지만 yourName의 객체값도 수정됨