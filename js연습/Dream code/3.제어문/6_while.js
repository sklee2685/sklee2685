// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
// 변수선언을 while문안에서 할수 없어서 while문 밖에서 변수선언을 해야함

let num = 5;
while (num>=0){
    console.log(num);
    num--;
}

let isActive =true;
let i = 0;
while (isActive){
    console.log('아직 true입니다.');
    if (i===1000){
        break;
    }
    i++;
}

// do {} while
// 일단 한번 실행시키고, 그런다음 조건을 검사하기 시작함
do {
    console.log('아직 true입니다.');
    if (i===1000){
        break;
    }
    i++;
} while(isActive)