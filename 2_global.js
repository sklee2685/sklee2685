console.log(globalThis);
console.log(Infinity);
console.log(NaN)
console.log(undefined);

eval('const a = 1; console.log(a);');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('1.23'));
console.log(parseInt('1.23'));

// URL (URI, Uniform Resource Identifier의 하위 개념)
// 아스키 문자로만 구성되어야하고, 한글이나 특수문자는 이스케이프 처리해야한다.
const URL = 'http://js연습.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decode = decodeURI(encoded);
console.log(decode);

// 모든 문자를 인코딩
const original = 'http://js연습.com';
const before = encodeURIComponent(original);
console.log(before);

const after = decodeURIComponent(before);
console.log(after);