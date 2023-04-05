const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");


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
// Svg class that has a constructor with methods for rendering and setting the text and shape elements in the SVG string.
class Svg {
  constructor() {
      this.textElement = '';
      this.shapeElement = '';
  }
  render() {
      return `TEST`;
  }
}

//   Function to initialize and prompt the user questions
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    //checking for no more than 3 charaters
    var characters = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        characters = answers.text;
    } else {
        console.log("Invalid number of Charaters, Please enter 1-3 Characters");
        return;
    }
    console.log("Selected text letters: [" + characters + "]");
    //  font color
    fontColor = answers.textColor;
    console.log("Selected font color: [" + fontColor + "]");
    //  shape color
    shapeColr = answers.shapeColor;
    console.log("Selected shape color: [" + shapeColr + "]");
    //  shape type
    shapeType = answers.shape;
    console.log("Selected shape:  [" + shapeType + "]");
    // shape
    let shape;
    if (shapeType == "Square") {
        shape = new Square();
        console.log("You chose a Square Logo");
    } else if (shapeType == "Circle") {
        shape = new Circle();
        console.log("You chose a Circle Logo");
    } else if (shapeType == "Triangle") {
        shape = new Triangle();
        console.log("You chose a Triangle Logo");
    }
    // Create a new Svg instance and add the shape and text elements to it
      var svg = new Svg();
      svgString = svg.render();
      //Console.log SVG string
      console.log("Here is the SVG String:  " + svgString);
 

})
.catch((err) => console.log(err));
}

init();
