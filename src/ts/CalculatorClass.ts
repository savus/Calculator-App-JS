export class Calculator {
  previousOperand: HTMLDivElement;
  currentOperand: HTMLDivElement;

  constructor(previousOperand: HTMLDivElement, currentOperand: HTMLDivElement) {
    this.previousOperand = currentOperand;
    this.currentOperand = previousOperand;
  }

  clear() {}

  delete() {}

  appendNumber(number: number) {}

  chooseOperation(operation: string) {}

  compute() {}

  updateDisplay() {}
}
