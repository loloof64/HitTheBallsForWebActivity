define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!', 'konva', 'class'], function (doc) {

		// Initialize the activity.
		activity.setup();

		var Canvas = buildCanvasClass();
		var theCanvas = new Canvas();

		var circle = new Konva.Circle({
			x: theCanvas.stage.getWidth() / 2,
			y: theCanvas.stage.getHeight() / 2,
			radius: 70,
			fill: 'red',
			stroke: 'black',
			strokeWidth: 4
		});

		theCanvas.layer.add(circle);
		theCanvas.layer.draw();
	});

});
