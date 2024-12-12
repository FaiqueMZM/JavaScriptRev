// singleton
console.log("Singleton");
// ensulres that a class has only one instance and provides a global acces point to it

const Singleton = (function () {
  let instance;

  function createInstance() {
    return { message: "I am the only instance!" };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
