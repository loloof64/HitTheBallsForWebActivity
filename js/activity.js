define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!', 'konva'], function (doc) {

		// Initialize the activity.
		activity.setup();

		var toolbarHeightProperty = window
			.getComputedStyle(document.getElementById("main-toolbar"), null)
			.getPropertyValue("height");

		var toolbarHeight = parseInt(toolbarHeightProperty.
			slice(0, toolbarHeightProperty.length - 2));

		var stage = new Konva.Stage({
			container: 'canvas',
			width: window.innerWidth,
			height: window.innerHeight - toolbarHeight
		});

		var layer = new Konva.Layer();

		var circle = new Konva.Circle({
			x: stage.getWidth() / 2,
			y: stage.getHeight() / 2,
			radius: 70,
			fill: 'red',
			stroke: 'black',
			strokeWidth: 4
		});

		layer.add(circle);

		stage.add(layer);
	});

});
