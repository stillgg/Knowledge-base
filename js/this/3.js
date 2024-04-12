"use strict";

function foo() {
  return {
    bar: () => this,
  };
}

console.log(foo().bar());

function baz() {
  return {
    bar() {
      return this;
    },
  };
}

console.log(baz().bar());
