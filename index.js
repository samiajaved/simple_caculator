#! /usr/bin/env node
import inqiurer from "inquirer";
const asnwer = await inqiurer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (asnwer.operator === "addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}
else {
    console.log("please select valid operator");
}
