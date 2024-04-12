const obj = {
  foo: () => this,
};

const obj2 = {
  foo() {
    return this;
  },
};
