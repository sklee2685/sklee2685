const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

//문자의 길이 
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);

// 문자열에서 특정 인덱스에 위치하는 문자를 출력 []와 동일하게 작동
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// 처음부터 비교하고, 해당 단어가 몇번째 인덱스에 위치하는지 출력해줌
console.log(text.indexOf('l'));
// 뒤에서 부터 비교해 해당 단어가 몇번째 인덱스에 위치하는지 출력해줌
console.log(text.lastIndexOf('l'));

// ()안에 문자를 포함하고 있는지 true/false로 알려줌 (대소문자 구분함)
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

// 특정한 문자로 시작하는지 true/false로 알려줌 (대소문자 구분함)
console.log(text.startsWith('He'));
// 특정한 문자로 끝나는지 true/false로 알려줌 (대소문자 구분함)
console.log(text.endsWith('!'));

// 문자를 모두 대문자, 소문자로 만들어줌
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 특정 위치에 있는 문자를 지움 
// substring(시작위치, 해당 인덱스를 포함하지 않고 그전까지)
console.log(text.substring(0, 2)); // 인덱스 0부터 1까지 문자를 지움
console.log(text.slice(2)); // 인덱스 0부터 1까지 잘라냄
console.log(text.slice(-2)); // 앞부분 인덱스 2를 제외하고 모두 잘라냄

// trim => 공백 제거
const space = '            space       ';
console.log(space.trim());

//split => 특정 문자를 기준으로 문자열을 끊어줌
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(', ', 2));
