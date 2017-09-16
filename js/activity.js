define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!', 'konva', 'oolib'], function (doc) {

		// Initialize the activity.
		activity.setup();

		var Canvas = buildCanvasClass();
		var BaloonBuilder = buildBalloonBuilder();

		var theCanvas = new Canvas();
		var baloon1 = new BaloonBuilder()
			.setLocation(40, 90)
			.setRadius(90)
			.setText('5+8')
			.setBackgroundColor('#FC0000')
			.setForegroundColor('#003CFD')
			.setTextSizeRatio(0.8)
			.setTextXRatio(0.35)
			.setTextYRatio(0.55)
			.build();

		var baloon2 = new BaloonBuilder()
			.setLocation(200, 80)
			.setRadius(240)
			.setText('15+72')
			.setBackgroundColor('#00DF27')
			.setForegroundColor('black')
			.setTextSizeRatio(0.6)
			.setTextXRatio(0.15)
			.setTextYRatio(0.70)
			.build();

		theCanvas.getLayer().add(baloon1);
		theCanvas.getLayer().add(baloon2);

		theCanvas.getLayer().draw();
	});

});
