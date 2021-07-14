/*  Tested on Version: L2021.3.0

    Force all widget info buttons to display at all
    times, instead of only on hover.
*/


// fired when the widget’s rendering is complete and the widget is ready
dashboard.on('widgetready', function (dash, w) {
    $('div.dashboard-layout:not(.editing) widget widget-toolbar:not(.widget-toolbar--show-menu) widget-toolbar-btn').css('opacity', '1');
});