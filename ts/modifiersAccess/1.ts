class Bar {
  protected a = 1;
  private b = 2;
  public c = 3;
  static e = 5;

  d: number;

  constructor() {
    this.d = 4;
  }

  log() {
    const { a, b, c, d } = this;

    const e = this.e;

    return `a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`;
  }

  static log() {
    const { e } = this;

    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;

    return `a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`;
  }
}

console.log(Bar.e);
