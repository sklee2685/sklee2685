//반복문 Loop Statement
// for(변수 선언문; 조건식; 증감식){}
// 실행순서
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 {} 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복함

for (let i = 0; i<5; i++){
    console.log(i);
}

// 반복문 제어 (continue,break)
for (let i = 0; i < 20; i++) {
    if (i === 10) {
      continue; //i가 10이 되면 아래에 코드는 무시하고 다음으로 넘어감
          //i가 11일 경우를 실행
      console.log('i가 드디어 10이 되었다!');
      break; // i가 10이 되면 반복문을 멈춤
    }
    console.log(i);
  }