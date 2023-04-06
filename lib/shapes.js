//Shape class with a constructor intializing color and sets the color value.
class Shape{
    
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
// Defines Circle, Triangle, and Square classes,  extends the shape and renders position,size and color chosen for them.
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

};
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`
    }
}
module.exports = {Circle, Triangle, Square}
