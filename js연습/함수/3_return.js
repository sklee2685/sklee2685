// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨
function add(a,b){
    //return a + b;
}
const result = add(1,2);
console.log(result); // undefined 출력

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍 종료함!
function print(num){
    if(num < 0){
        return; // return으로 인해 num의 숫자가 0보다 작으면 프로그램이 종료됨
    }
    console.log(num);
}
print(12); // 0보다 크므로 12가 출력됨
print(-12); // 0보다 작으므로 아무것도 출력되지 X