
//submit homework to the repository that you created for git lecture 



// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

// variable "num" - is a basis number which we need exponentiate in "exponent",
//only if "exponent" is integer and greater than 1 or equal 1
let num = 8,
    exponent = 2;
function multiply(basis, exp) {
    if (exp > 1){
        basis *= multiply(basis, exp - 1);
    }
    return basis
}
console.log(multiply(num, exponent));

// 2. Write functions min and max that will find min and max number in array using apply

const methodsMaxMin = {
    max: function () {
        return Math.max.apply(null, ...arguments)
    },
    min: function () {
        return Math.min.apply(null, ...arguments)
    }
}

arr = [32, 15, 36, 48, 10, 32, 35, 16, 10, 42, 17, 5]

console.log(methodsMaxMin.max(arr))
console.log(methodsMaxMin.min(arr))

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars

function displayCarDetails() {
    console.log(`This driver drives a ${this.color} ${this.branch} with ${this.carNum} registered number`);
}

class ownerName {

    constructor(branch, color, carNum) {
        this.branch = branch;
        this.color = color;
        this.carNum = carNum;
    }
}

john = new ownerName('John', 'Volkswagen', 'black', 'AA1432BX');
konstantin = new ownerName('konstantin','Lexus', 'red', 'AA3456BX');
oleg = new ownerName('oleg','Volkswagen', 'white', 'AA9876OO');

displayCarDetails.call(john);
displayCarDetails.call(konstantin);
displayCarDetails.call(oleg);

/*---------------------------------------------------------------------------------------------------*/
// // Here is another solution, built on principle that method is a function
// // it's have not receive as argument ownerName, but looks more useful
//
// class Driver {
//
//     constructor(ownerName, branch, color, carNum) {
//         this.ownerName = ownerName;
//         this.branch = branch;
//         this.color = color;
//         this.carNum = carNum;
//     }
//
//     displayCarDetails = function () {
//         console.log(`${this.ownerName} drives a ${this.color} ${this.branch} with ${this.carNum} registered number`);
//     }
//
// };
//
// john = new Driver('John', 'Volkswagen', 'black', 'AA1432BX');
// konstantin = new Driver('konstantin','Lexus', 'red', 'AA3456BX');
// oleg = new Driver('oleg','Volkswagen', 'white', 'AA9876OO');
//
// john.displayCarDetails();
// konstantin.displayCarDetails();
// oleg.displayCarDetails();
/*------------------------------------------------------------------------------------------------------*/

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
 
function greet () {
  if (this.name ===  'amy' ) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
const amy = {name: 'amy'};
console.log(greet.call(amy));

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

//the first one
// for (let i = 0; i < 4; i++) {
//     setTimeout(() => console.log(i), 0)
// }

// //the second one, thanks google i found it and get deeper look on "bind()"
for (var i = 0; i < 4; i++) {
    setTimeout(console.log.bind(console, i), 0);
}
