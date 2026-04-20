// create an array with 3 functions
const myFunctions = [
  function () {
    console.log("Function 1");
  },
  function () {
    console.log("Function 2");
  },
  function () {
    console.log("Function 3");
  },
];

myFunctions.forEach(function (fn) {
  fn();
});

// create a function as a const
const hello = function () {
  console.log("Hello");
};

// create a function normally
function hi() {
  console.log("Hi");
}

hello();
hi();

// create an object with a function as a value
const obj = {
  speak: function () {
    console.log("This is a function inside an object");
  },
};

obj.speak();
