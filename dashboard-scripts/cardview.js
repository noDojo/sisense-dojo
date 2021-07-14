/*  Tested on Version: L2021.3.0

    Applies styles to all dashboard widgets to give
    the dashboard a "card view" appearance.
*/

const _dashboardPerimeterPadding = '1.4625rem';
const _preventDblSpacing = '-.65rem';
const _dashboardPerimeterSpacing = {
    'padding': _dashboardPerimeterPadding,
    'margin': _preventDblSpacing
};

const _paddingBetweenWidgets = '1.3rem .65rem';
const _spacingBetweenWidgets = {
    'padding': _paddingBetweenWidgets
};

const _dashboardBackgroundColor = '#f0f0f0';
const _dashboardBackgroundStyles = {
    'background-color': _dashboardBackgroundColor
};

const _borderRadiusForAllWidgets = '6px';
const _stylesForAllWidgets = {
    'border-radius': _borderRadiusForAllWidgets
};


// fired for each of the dashboard's widgets when each is initialized
dashboard.on('widgetinitialized', function (w) {
    // from the dom, remove dividers and each widget's draggable handle
    $('.dashboard-layout-cell-horizontal-divider, .ui-resizable-handle').remove();

    // set the spacing of the dashboard's perimeter
    $('div.dashboard-layout').css(_dashboardPerimeterSpacing);

    // set the spacing between each of the dashboard's widgets
    $('div.dashboard-layout-subcell-host').css(_spacingBetweenWidgets);

    // set the background-color of the dashboard
    $('div.dashboard-wrapper').css(_dashboardBackgroundStyles);

    // round the corners of all widgets on the dashboard
    $('widget').css(_stylesForAllWidgets);
});