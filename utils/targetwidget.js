/*  Tested on Version: L2021.3.0

    Logic that can be used to be sure you are only targeting the widget
    attached to the handler in which your code is written.
*/

// fired when the widget's rendering is over and the widget is ready
widget.on('ready', function (w) {
    let thisWidgetOnly = prism.$ngscope.appstate === 'dashboard' ? $('widget[widgetid="' + w.oid + '"]') : undefined;
    thisWidgetOnly.css('background-color', '#bada55');
});