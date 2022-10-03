// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 매우 좋지X
function display(num){
    num = 5; // 3. num의 값을 5로 재할당 
    console.log(num); // 4. 5를 출력함
}
const value = 4; // 1. value의 값을 4로 설정
display(value); // 2. 해당값을 display라는 함수에 입력
console.log(value);// 5. 하지만 여기서 value의 값을 출력하면 4가 나옴

// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함
// 원시값 -> 값에 의한 복사
// 객체값 -> 참조에 의한 복사 (메모리주소가 전달됨=동일한 오브젝트를 가르킴)

function displayObj(obj){
    obj.name = 'ho';
    console.log(obj);
}
const lee = {name:'lee'};
displayObj(lee);
console.log(lee);

// 만약 꼭 수정해야하는 경우
function changeName(obj){
	return { ...obj, name:'ho'};
}