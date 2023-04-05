const fs = require("fs");
const inquirer = require("inquirer");
const {Circle} = require("./lib/shapes");


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
// Svg class that has a constructor with method for rendering and setting the text and shape elements in the SVG string.
class Svg {
  constructor() {
      this.textElement = '';
      this.shapeElement = '';
  }
  render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="35" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
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

      shape.setColor(shapeColr);

      // Create a new Svg instance
      var svg = new Svg();
      // Add the text elements
      svg.setTextElement(characters, fontColor);
      // Add the shape element
      svg.setShapeElement(shape);
      svgString = svg.render();
      //Console.log SVG string
      console.log("Here is the SVG String:  " + svgString);
      return writeToFile("logo.svg", svgString);

})
.catch((err) => console.log(err));
}
// Function to write data to file
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, function (err) {
          if (err) {
              reject(err);
          } else {
              console.log("logo.svg logo generated.");
              resolve();
          }
      });
  });
}

init();
