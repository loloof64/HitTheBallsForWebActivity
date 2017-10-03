define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!', 'ocanvas'], function (doc) {

		// Initialize the activity.
		activity.setup();

		var canvas = new Canvas();

		var nativeCanvasWidth = canvas.getNativeCanvas().width;
		var nativeCanvasHeight = canvas.getNativeCanvas().height;
		var nativeCanvasMaxDimension = nativeCanvasWidth > nativeCanvasHeight ?
			nativeCanvasWidth : nativeCanvasHeight;
		var commonFontSize = nativeCanvasMaxDimension * 0.05;

		var balloon1 = new BalloonBuilder(canvas)
			.setLocation(20, 30)
			.setText('3')
			.setFontSize(commonFontSize)
			.setBackgroundColor('#FC0000')
			.setForegroundColor('#003CFD')
			.build();

		var balloon2 = new BalloonBuilder(canvas)
			.setLocation(200, 10)
			.setText('15+72')
			.setFontSize(commonFontSize)
			.setBackgroundColor('#00DF27')
			.setForegroundColor('black')
			.build();

		var balloon3 = new BalloonBuilder(canvas)
			.setLocation(50, 50)
			.setText('1*2')
			.setFontSize(commonFontSize)
			.setBackgroundColor('pink')
			.setForegroundColor('yellow')
			.build();

		balloon1.moveTo(200, 230);

		canvas.update();
	});

});
