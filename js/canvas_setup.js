var Canvas = function () {

    var computeToolbarHeight = function () {
        var toolbarHeightProperty = window
            .getComputedStyle(document.getElementById("main-toolbar"), null)
            .getPropertyValue("height");

        var toolbarHeight = parseInt(toolbarHeightProperty.
            slice(0, toolbarHeightProperty.length - 2));

        return toolbarHeight;
    };

    var nativeCanvas = document.getElementById("canvas");
    nativeCanvas.width = window.innerWidth;
    nativeCanvas.height = window.innerHeight - computeToolbarHeight();

    this.canvas = oCanvas.create({
        canvas: nativeCanvas,
        background: "#FFFFFF",
        fps: 60
    });

    this.getNativeCanvas = function () {
        return this.canvas;
    }

    this.update = function () {
        this.canvas.draw.redraw();
    };
};

var Group = function (objectsArray) {
    this.objects = objectsArray;
    this.moveTo = function (px, py) {
        var baseObject = this.objects[0];
        var deltaX = px - baseObject.x;
        var deltaY = py - baseObject.y;

        for (var currentIndex in this.objects) {
            var currentObject = this.objects[currentIndex];
            currentObject.x += deltaX;
            currentObject.y += deltaY;
        }
    };
}

var BalloonBuilder = function (canvas) {
    this.canvas = canvas;
    this.x = 0;
    this.y = 0;
    this.text = "";
    this.fontSize = 16;
    this.backgroundColor = 'white';
    this.foregroundColor = 'black';

    this.setLocation = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    this.setText = function (text) {
        this.text = text;
        return this;
    }

    this.setBackgroundColor = function (backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }

    this.setForegroundColor = function (foregroundColor) {
        this.foregroundColor = foregroundColor;
        return this;
    }

    this.setFontSize = function (size) {
        this.fontSize = size;
        return this;
    }

    this.build = function () {
        var numChars = this.text.length;

        var text = this.canvas.getNativeCanvas().display.text({
            text: this.text,
            x: this.x,
            y: this.y,
            font: "bold " + this.fontSize + "px sans-serif",
            fill: this.foregroundColor,
        });

        var circle = this.canvas.getNativeCanvas().display.ellipse({
            x: this.x,
            y: this.y,
            origin: { x: "left", y: "top" },
            radius: 30,
            fill: this.backgroundColor
        });

        var textMaxDimension = text.width > text.height ? text.width : text.height;
        var computedRadius = parseInt(textMaxDimension * 0.6);
        circle.radius = computedRadius;

        text.x = parseInt(this.x + (2 * computedRadius - text.width) * 0.5);
        text.y = parseInt(this.y + (2 * computedRadius - text.height) * 0.5);

        this.canvas.getNativeCanvas().addChild(circle);
        this.canvas.getNativeCanvas().addChild(text);

        return new Group([circle, text]);
    }
}