"use strict";

function foo() {
  return function () {
    console.log(this);
  };
}

foo()();

function bar() {
  return () => {
    console.log(this);
  };
}

bar()();
