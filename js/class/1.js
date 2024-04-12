class Foo {
  a = 1;
  static b = 2;

  constructor() {
    this.foo = 5;
  }

  baz() {
    console.log(2);
  }

  static bar() {
    console.log("method baz - ", this.baz);

    return `${this.a} ${this.b}`;
  }
}

const obj = new Foo();

console.log("obj - ", obj);

console.log(obj[1]);

console.log(Foo.bar());
