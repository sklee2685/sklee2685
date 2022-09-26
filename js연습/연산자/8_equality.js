// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false object에는 값이 아닌 메모리 주소가 저장되어있어 false가 출력됨
console.log(obj1 === obj2);// 값자체가 다르므로 타입이 동일해도 false 가 출력됨
console.log(obj1.name == obj2.name); //이건 주소가 아닌 값을 비교하는 것 이므로 true 
console.log(obj1.name === obj2.name);// true

let obj3 = obj2;
console.log(obj3 == obj2); //동일한 주소값을 가지고 있으로 true
console.log(obj3 === obj2); // 값과 타입 둘다 동일하므로 true
