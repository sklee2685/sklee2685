// 함수 선언문 funcntion name() {}
// 함수 표현식 const name = function() {}
// 함수도 객체이기 때문에 다른 객체처럼 다른 변수에 할당, 재할당이 가능
let add = function(a,b){
    return a + b;
};
console.log(add(1,2));

// 화살표 함수 const name = () =>{}
let sub = (a,b) => {
    return a - b;
};
console.log(sub(3,1));

// 생성자 함수 const objcet = new Function(); 이건 객체편에서 다시

// IIFE (Immdiately-Invoked Function Expressions)즉각 적으로 실행되는 함수
// 함수를 선언하는 동시에 출력할때 사용함 ()안에 함수를 선언후 ();를 입력해 출력
// 자바스크립트에선 많이 쓰이진 않음
(function run(){
    console.log('hi');
})();