
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    caclArea() {
        return this.height * this.width;
    }
}

class ColoredRectanleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`текст: ${this.text}, цвет ${this.bgColor}`);
    }
}

const div = new ColoredRectanleWithText(25, 10, 'Hello world', 'red');

div.showMyProps();
console.log(div.caclArea());



// const square = new Rectangle( 10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.caclArea());
// console.log(long.caclArea());