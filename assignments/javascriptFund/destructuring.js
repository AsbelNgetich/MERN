// 1.
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [, otherRandomCar] = cars


// //Predict the output

// //Outputs Tesla
// console.log(randomCar)

// //Outputs Mercedes
// console.log(otherRandomCar)

//........................................................................

//2.
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;


// //Predict the output
// //gives a 'name not defined' error since the name variable is stored in otherName
// console.log(name);
// console.log(otherName);

//...............................................................................

//3.
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;

// //Predict the output
// //Outputs 12344
// console.log(password);
// //hashedPassword is undefined because its not a property in person's object
// console.log(hashedPassword);

//.........................................................................................

//4.
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers;
// //first == 2
// const [, , , second] = numbers;
// //second == 5
// const [, , , , , , , , third] = numbers;
// //third == 2

// //Predict the output
// //Outputs false
// console.log(first == second);
// console.log(first == third);

//............................................................................................

//5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;

//Predict the output
//Outputs value
console.log(key);
//Outputs array
console.log(secondKey);
//Outputs first index of the array
console.log(secondKey[0]);
//outputs 5
console.log(willThisWork);









