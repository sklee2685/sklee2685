//문자열타입
let string = '안녕하세요';

string = `안녕!`;
console.log(string);

//특수 문자 출력
string = "'안녕!'";
console.log(string);

string = '안녕 \nlee!\t\t내 이름은 \\';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = 'lee';
let greeting = "'hi!,'" + id;
console.log(greeting);

greetings=`'hi', ${id} `;
console.log(greetings);