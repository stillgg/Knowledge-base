class Singleton {
  constructor() {
    const { instance } = Singleton;

    if (instance) return instance;

    Singleton.instance = this;
  }
}

console.log(new Singleton() === new Singleton())