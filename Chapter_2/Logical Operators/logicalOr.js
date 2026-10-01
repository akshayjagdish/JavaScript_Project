let a = 50;
let b = 30;

//cash_1
let cond1 = a > b; //true
let cond2 = a=== 6; //true
console.log("(cash_1) condi1 || condi2 = ", cond1 || cond2);

//cash_2
let cond1 = a < b; //false
let cond2 = a=== 6; //true
console.log("(cash_2)condi1 || condi2 = ", cond1 || cond2);

//cash_3
let cond1 = a > b; //true
let cond2 = a=== 5; //false
console.log("(cash_3)condi1 || condi2 = ", cond1 || cond2);

//cash_4
let cond1 = a < b; //false
let cond2 = a=== 7; //false
console.log("(cash_4)condi1 || condi2 = ", cond1 || cond2);