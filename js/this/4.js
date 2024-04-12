const obj = {
  bar() {
    return this;
  },
  baz() {
    return this;
  },
};

obj.bar().baz().bar();
