// strategy
console.log("Strategy");
// defines a family of algorithms and makes them interchangeable

class PaymentStrategy {
  processPayment(amount) {
    throw new Error("This method should be implemented");
  }
}

class CreditCardPayment extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class PaymentProcessor {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    this.strategy.processPayment(amount);
  }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.setStrategy(new CreditCardPayment());
paymentProcessor.executePayment(100); // Paid 100 using Credit Card
