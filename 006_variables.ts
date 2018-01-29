// var fullName : string = "Supe Lillywhite";
// let paidAccount : boolean = true;
// const versionNumber : number = 1.3;

// fullName = "Brady Berryessa";
// paidAccount = false;
// versionNumber = 1.5;

// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

function printName(f, l) {
  let greeting : string = "Hi there, ";
  console.log(greeting + f + " " + l)

  greeting = "Hey there, ";
  console.log(greeting + f + " " + l)
}

function printNameTwo(f, l) {
  var greeting : string = "Hi there, ";
  console.log(greeting + f + " " + l)

  var greeting : string = "Hey there, ";
  console.log(greeting + f + " " + l)
}

printName("Billy", "Bob");
printNameTwo("Billy", "Bob");

