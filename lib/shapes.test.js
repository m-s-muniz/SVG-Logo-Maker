const {Circle, Square, Triangle} = require("./shapes")


    // Circle Shape
    describe('Circle', () => {
        test('renders correctly', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
  });
    // Triangle Shape
    describe('Triangle', () => {
        test('renders correctly', () => {
          const shape = new Triangle();
          var color =('blue')
          shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
        });
      });
    // Square Shape
    describe('Square', () => {
        test('renders correctly', () => {
          const shape = new Square();
          var color =('#154734')
          shape.setColor(color);
          expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}" />`);
        });
      });

      