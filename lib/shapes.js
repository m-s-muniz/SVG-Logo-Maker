//Shape class with a constructor intializing color and sets the color value.
class Shape{
    
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
// Defines a Circle class,  extends the shape and renders position,size and color chosen for the circle.
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
module.exports = {Circle}
