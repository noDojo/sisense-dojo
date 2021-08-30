/*  Tested on Version: L2021.7.0

    Logic that prevents the widget being hidden if no results
    are returned after a query is made.

    The widget isn't actually hidden, its height is set to 1px.
    To prevent this behavior, explicitly set the widget's height.
*/


widget.on('ready', function (w) {
    let widgetElement = prism.$ngscope.appstate === 'dashboard' ? $('widget[widgetid="' + w.oid + '"]') : undefined;
    widgetElement.css('height', '200px');
});

widget.on('queryend', function (w, args) {
    let widgetElement = prism.$ngscope.appstate === 'dashboard' ? $('widget[widgetid="' + w.oid + '"]') : undefined;
    widgetElement.css('height', '200px');
});