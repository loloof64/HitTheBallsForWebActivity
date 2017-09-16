function buildCanvasClass() {

    function buildCanvasStage() {
        function computeToolbarHeight() {
            var toolbarHeightProperty = window
                .getComputedStyle(document.getElementById("main-toolbar"), null)
                .getPropertyValue("height");

            var toolbarHeight = parseInt(toolbarHeightProperty.
                slice(0, toolbarHeightProperty.length - 2));

            return toolbarHeight;
        }

        var stage = new Konva.Stage({
            container: 'canvas',
            width: window.innerWidth,
            height: window.innerHeight - computeToolbarHeight()
        });

        return stage;
    }

    return oo.createClass({
        _create: function () {
            this.stage = buildCanvasStage();
            this.layer = new Konva.Layer();

            this.stage.add(this.layer);
        },

        getStage: function () {
            return this.stage;
        },

        getLayer: function () {
            return this.layer;
        }
    });
}

function buildBalloonBuilder() {
    return oo.createClass({
        _create: function () {
            this.x = 0;
            this.y = 0;
            this.radius = 0;
            this.text = "";
            this.backgroundColor = 'white';
            this.foregroundColor = 'black';
            this.textSizeRatio = 0.1; // ratio textSize / radius
            this.textXRatio = 0.1; // ratio textX / radius
            this.textYRatio = 0.1; // ratio textY / radius
        },

        setLocation: function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        },

        setRadius: function (radius) {
            this.radius = radius;
            return this;
        },

        setText: function (text) {
            this.text = text;
            return this;
        },

        setBackgroundColor: function (backgroundColor) {
            this.backgroundColor = backgroundColor;
            return this;
        },

        setForegroundColor: function (foregroundColor) {
            this.foregroundColor = foregroundColor;
            return this;
        },

        // ratio textSize / radius
        setTextSizeRatio(ratio) {
            this.textSizeRatio = ratio;
            return this;
        },

        // ratio textX / radius
        setTextXRatio(ratio) {
            this.textXRatio = ratio;
            return this;
        },

        // ratio textY / radius
        setTextYRatio(ratio) {
            this.textYRatio = ratio;
            return this;
        },

        build: function () {
            var group = new Konva.Group({
                x: this.x,
                y: this.y
            });

            var circle = new Konva.Circle({
                x: this.radius,
                y: this.radius,
                radius: this.radius,
                fill: this.backgroundColor
            });

            var text = new Konva.Text({
                x: parseInt(this.radius * this.textXRatio),
                y: parseInt(this.radius * this.textYRatio),
                text: this.text,
                fontSize: parseInt(this.radius * this.textSizeRatio),
                fill: this.foregroundColor
            });

            group.add(circle);
            group.add(text);

            return group;
        }
    });
}