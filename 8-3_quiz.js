/**
 * 3. 1초에 한번씩 시계를 (날짜포함) 출력
 * setInterval 사용
 */
setInterval(() =>{
    const toDay = new Date();
    console.log(toDay.toLocaleString('ko-KR'))
    //console.log(toDay.getFullYear()+'-'+(toDay.getMonth()+1) +'-'+toDay.getDate(),toDay.getHours()+'시',toDay.getMinutes()+'분',toDay.getSeconds()+'초');
},1000);