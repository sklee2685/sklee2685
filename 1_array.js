// 배열 생성 방법
let array = new Array(2); // ()에 숫자하나만 넣음으로써 사이즈를 지정할 수 있다.
console.log(array);

array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,4,5,6);
console.log(array);

const anotherArray = [1,2,3,4];
console.log(anotherArray);

// 기존에 있던 배열을 그대로 가지고와 배열을 새로 만듬
array = Array.from(anotherArray);
console.log(array);

/**
 * 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
 * but 자바스크립트에서의 배열은 연속적으로 이어져 있지 않음
 * 그래서 오브젝트와 유사함!
 * 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다!
 * 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
 */
// 베열과 object(객체)와 유사함을 증명하는 코드
array = Array.from({
    0:'안',
    1:'녕',
    length:2,
});
console.log(array);