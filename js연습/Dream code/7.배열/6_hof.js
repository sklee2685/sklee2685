const fruits = ['π', 'π', 'π', 'π'];
// κΈ°μ‘΄μ λ°°μ΄μ μλ μμ΄νμ νλμ© μΆλ ₯νλ €λ©΄ λ€μκ³Ό κ°μ΄
// λ°λ³΅λ¬Έμ μ¬μ©ν΄μΌ νμ
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// μ΄λ₯Ό κ°νΈνκ² νκΈ° μν΄μ μ¬μ©ν  μ μλ κ³ μ°¨ν¨μκ° μμ
fruits.forEach(function(value,index,array){
    console.log('-------------------------------');
    console.log('μμ΄ν: ',value);
    console.log('μΈλ±μ€ λ²νΈ: ',index);
    console.log('μ μ²΄ λ°°μ΄: ',array);
});

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = {name:'π₯', price:2};
const item2 = {name:'πͺ', price:3};
const item3 = {name:'π', price:1};
const products = [item1,item2,item3,item2];

let found = products.find((value)=> {
    return value.name === 'πͺ';
    // μλ ₯λ°μ λ°°μ΄μ€'πͺ'μ΄ μλ€λ©΄ ν΄λΉ κ°μ²΄λ₯Ό foundλΌλ λ³μμ μ μ₯
});
console.log(found);

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
found = products.findIndex((value)=> {
    return value.name === 'πͺ';
});
console.log(found);

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
// μ‘°κ±΄μ λ§μ‘±νλ©΄ true, κ·Έλ μ§ λͺ»νλ©΄ false μΆλ ₯
result = products.some((item)=>{
    return item.name ==='πͺ';
});
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((item)=>{
    return item.name ==='πͺ';
});
console.log(result);

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νμ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((item)=>{
    return item.name ==='πͺ';
});
console.log(result);

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±
const nums = [1,2,3,4,5];
result = nums.map((item) => { 
    return item*2
});
console.log(result);

result = nums.map((item) => { 
    if(item % 2 === 0){
        return item*2;
    }else{
        return item;
    }
});
console.log(result);

// Flatmap: μ€μ²©λλ λ°°μ΄λ€μ νμ΄μ λ°°μ΄μμ μλ κ°μ λμ΄νλ€.
// ex) A[1,2], B[3,4]λΌλ λ°°μ΄μ κ°μ§κ³  μμλ, 
//Flatmapμ μ¬μ©νλ©΄ [1,2,3,4]λΌλ λ°°μ΄κ°μ μ»μμ μλ€.
result = nums.map((item) => [1,2]);
console.log(result);

result = nums.flatMap((item) => [1,2]);
console.log(result);

// sort λ°°μ΄μ μμ΄νμ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ₯Έμ°¨μμΌλ‘ μμλ₯Ό μ λ ¬ν¨(κΈ°μ‘΄μ λ°°μ΄μ μμ )
const text = ['hi','abc'];
text.sort();
console.log(text);

// νμ§λ§ μ«μννμ λ°μ΄ν°μμ μ¬μ©νλ©΄ λ€μκ³Ό κ°μ΄ μ΄μνκ² λμ¨λ€
const numbers = [0,4,2,5,1,3,6,10,20];
numbers.sort();
console.log(numbers);

// μ΄λ₯Ό ν΄κ²°νκΈ° μν΄μ μνλ λΉκ΅λμμ μ½λ°±μ μ λ¬ν΄μ£Όλ©΄ λλ€.
// μ¬κΈ°μ a-bκ° μμμ΄λ©΄ aκ° μμΌλ‘ μ λ ¬(μ€λ¦μ°¨μ) μμμ΄λ©΄ bκ° μμΌλ‘ μ λ ¬(λ΄λ¦Όμ°¨μ)λλ€.
numbers.sort((a,b) => a-b);
console.log(numbers);

// reduce λ°°μ΄μ μμλ€μ νλμ© μ μ΄μ κ°μ νλλ‘ λ§λ¬
result = [1,2,3,4,5].reduce((sum,value) => {
    sum += value;
    console.log(sum);
    return sum;
},0);
// μ²μμ μμν  κ°μΈ 0μ {}λ€μμ μλ ₯ν΄μ£Όλ©΄ λ§¨ μ²μμ sumκ°μλ 0μ΄λ€μ΄κ°κ³ ,
// [1,2,3,4,5]μμ νλμ© κ°μ valueμ λ°μμμ {}μμ μ½λλ₯Ό μννκ² λλ€.