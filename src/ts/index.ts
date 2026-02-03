import { DATA_ATTRIBUTES } from "./constants.js";

const numberButtons = document.querySelectorAll(
  `${DATA_ATTRIBUTES.DATA_NUMBER}`,
)!;
const operationButtons = document.querySelectorAll(
  `${DATA_ATTRIBUTES.DATA_OPERATION}`,
)!;

const equalsButton = document.querySelector(`${DATA_ATTRIBUTES.DATA_EQUALS}`)!;
const deleteButton = document.querySelector(`${DATA_ATTRIBUTES.DATA_DELETE}`)!;
const allClearButton = document.querySelector(
  `${DATA_ATTRIBUTES.DATA_ALL_CLEAR}`,
)!;

const previousOperand = document.querySelector(
  `${DATA_ATTRIBUTES.DATA_PREVIOUS_OPERAND}`,
)!;
const currentOperand = document.querySelector(
  `${DATA_ATTRIBUTES.DATA_CURRENT_OPERAND}`,
)!;
