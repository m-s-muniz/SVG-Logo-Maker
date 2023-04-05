const fs = require("fs");
const inquirer = require("inquirer");


//An array of questions for user input.
const questions = [
{
    type: "input",
    name: "text",
    message: "TEXT: Enter up to 3 Characters:",
},
{
    type: "input",
    name: "textColor",
    message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
},
{
    type: "input",
    name: "shapeColor",
    message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
},
{
    type: "list",
    name: "shape",
    message: "SHAPE TYPE: Choose a shape for the Logo",
    choices: ["Circle", "Triangle", "Square"],
},
];



function init() {
  inquirer.prompt(questions)


}

init();
