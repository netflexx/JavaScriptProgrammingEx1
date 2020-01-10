/**
 * Author: Duc Vu - Web Jr B 
 */

let myFirstIntegerVariable = 4;
let myFirstFloatVariable = 9.9;
let myFirstBooleanVariable = true;
let myFirstName = 'Nguyen';
let myNullVariable = null;
let myUndefinedVariable;

// This is a single line comment
/*
    This is a block comment
    Lets play around with the code using the console.log method
*/
console.log('---------------------');
console.log(' Output of variables');
console.log('---------------------');

console.log(myFirstIntegerVariable);
console.log(myFirstFloatVariable);
console.log(myFirstBooleanVariable);
console.log(myFirstName);
console.log(myNullVariable);
console.log(myUndefinedVariable);

let mySecondInteger = 3;
    mySecondInteger = 5;

console.log('Addition');
let myAddition = myFirstIntegerVariable + mySecondInteger;
console.log(myAddition);
console.log('-----------------------');

console.log('Subtraction:');
let mySubtraction = myFirstIntegerVariable - mySecondInteger;
console.log(mySubtraction);
console.log('------------------------');

console.log('Multiplication:');
let myMyltiplication = myFirstIntegerVariable * mySecondInteger;
console.log(myMyltiplication);
console.log('------------------------');

console.log('Division:');
let myDivision = myMyltiplication / 2;
console.log(myDivision);
console.log('-------------------------')

console.log('Integer + Float');
let floatAddition = myFirstIntegerVariable + myFirstFloatVariable;
console.log(floatAddition);
console.log('------------------------');

console.log('Integer - Float');
let floatSubtraction = myFirstIntegerVariable - myFirstFloatVariable;
console.log(floatSubtraction);
console.log('------------------------');

console.log('Integer / Integer = Float');
//Dividing integers implicitly converts to float
let dividingInts = myFirstIntegerVariable / mySecondInteger;
console.log(dividingInts);
console.log('------------------------');

console.log('Integer / Integer = Integer');
//Dividing with whole number result implicit integer
let x = 4/2;
console.log(x);
console.log('------------------------');

console.log('Modulus 6 & 2');
let modResult = 6%2;
console.log(modResult);
console.log('------------------------');

console.log('Modulus 13 & 4');
modResult = 13 % 4;
console.log(modResult);
console.log('------------------------');

console.log('++ starting at 3');
let a = 3;
a++;
console.log(a);
console.log('------------------------');

console.log('-- starting at 7');
let b = 7;
b--;
b--;
console.log(b);
console.log('------------------------');

console.log('Compound += with 3 & 5');
let myThirdInteger = 3;
myThirdInteger += mySecondInteger;
console.log(myThirdInteger);
console.log('------------------------');

console.log('Compunt -= with 7 & 5');
let myFourthInteger = 7;
myFourthInteger -= mySecondInteger;
console.log(myFourthInteger);
console.log('------------------------');
