/*  Tested on Version: L2021.3.0

    Removes widget box-shadow styles to make the widget
    appear as if it doesn't have boundaries.

    TODO: The same result can probably be achieved with fewer elements having styles applied.
*/

const _hideWidgetBoundariesStyles = {
    'box-shadow': 'none'
};


// fired when a widget refresh ends
widget.on('refreshed', function (w) {
    $(element).css(_hideWidgetBoundariesStyles);
    $(element).parent().css(_hideWidgetBoundariesStyles);
    $(element).parent().parent().css(_hideWidgetBoundariesStyles);
    $('div.dashboard-layout-subcell-vertical').css(_hideWidgetBoundariesStyles);
});