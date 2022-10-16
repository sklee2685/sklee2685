// 현재 시간 출력
console.log(new Date());

// 특정한 시간 출력 (날짜 지정)
console.log(new Date('Jun 5, 2022'));
// 특정한 시간 출력 (날짜,시간 지정)
console.log(new Date('2022-12-17T03:24:00'));

// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기) 
console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
// 년도 설정
now.setFullYear(2023);

now.setMonth(0); // 0 => 1월 ,1 => 2월, ... 11 => 12월

// 년도, 날짜, 요일, 시간을 받아옴
console.log(now.getFullYear());
console.log(now.getDate()); // 0 => 1월 ,1 => 2월, ... 11 => 12월
console.log(now.getDay()); // 0 일요일일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);


console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
// ISO 8601 형식
console.log(now.toISOString()); 

console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
