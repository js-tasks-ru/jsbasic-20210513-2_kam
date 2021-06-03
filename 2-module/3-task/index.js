let calculator = {

  read(a, b) {
    calculator.myFunkyPropertyOne = a;
    calculator.myFunkyPropertyTwo = b;
  },

  sum() {
    return calculator.myFunkyPropertyOne + calculator.myFunkyPropertyTwo;
  },

  mul() {
    return calculator.myFunkyPropertyOne * calculator.myFunkyPropertyTwo;
  },

};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
