// 조건문 Conditional Statement
// switch
// 정해진 범위안에 값에 대해 특정한 일을 해야하는 경에 사용함
let day = 6; //0:월 1:화 2:수 ... 6:일
let dayName;
if (day ===0){
    dayName = '월요일';
} else if (day ===1){
    dayName = '화요일';
} else if (day ===2){
    dayName = '수요일';
} else if (day ===3){
    dayName = '목요일';
} else if (day ===4){
    dayName = '금요일';
} else if (day ===5){
    dayName = '토요일';
} else if (day ===6){
    dayName = '일요일';
}else{
    console.log('해당하는 요일이 없습니다.');
}
console.log(dayName);

// switch를 사용해면
switch (day){
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayname = '화요일';
        break;
    case 2:
        dayname = '수요일';
        break;
    case 3:
        dayname = '목요일';
        break;
    case 4:
        dayname = '금요일';
        break;
    case 5:
        dayname = '토요일';
        break;
    case 6:
        dayname = '일요일';
        break;
    default:
        console.log('해당하는 요일이 없습니다.');
}
console.log(dayname);