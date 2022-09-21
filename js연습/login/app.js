const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY= "username";
//반복 되는 변수들의 실수를 줄이기 위해 대문자로 변수를 다시 생성

function onLoginBtnSubmit(event){
    event.preventDefault();    
    const username= loginInput.value;
    localStorage.setItem("USERNAME_KEY",username);
    loginForm.classList.add(HIDDEN_CLASSNAME); //클래스 추가
    // greeting.innerText="Hello "+ username;
    // greeting.innerText=`Hello ${username}`; //위에랑 같은 동작
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} // 해당 두가지 코드가 반복됨으로 함수를 사용

const saveUsername=localStorage.getItem("USERNAME_KEY");
if (saveUsername === null){ // null 값이면 다시 입력 받는 페이지로 돌아오고 입력 받은 데이터가 있으면 새로고침을 해도 기록이 남아있음
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnSubmit);
}else{
    // greeting.innerText=`Hello ${saveUsername}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(saveUsername);
}
