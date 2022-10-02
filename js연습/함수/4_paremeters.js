// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 argument 객체에 저장됨
// 매개변수 기본값을 설정할 수 있음(= Default Parameters a=1 , b=1)
// 매개변수의 기본값인 undefined일때에만 a와b가 1의 값을 가지고, 사용자로부터 값을 입력받으면
// 해당값이 매개변수에 저장된다.
function add (a=1,b=1){
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
    return a + b;
};
add(2,4);

// Rest 매개변수 (Rest Parameters)
// ...변수명 으로 매개변수를 설정하면 얼마나 많은 인자가 전달될지 모를때 모든걸 다 배열로 바꿀때 사용
function sum(a,b, ...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
};
sum(1,2,3,4,5,6,7,8);