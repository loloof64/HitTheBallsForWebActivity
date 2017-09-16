function buildCanvas() {
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