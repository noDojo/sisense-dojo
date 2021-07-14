/*  Tested on Version: L2021.3.0

    Uses a boolean flag to show/hide the default arguments
    passed to each widget-level event handler.

    NOTE: Some arguments may be passed in inside of an object.
          Locating these handler args is a wip.

    RELEVANT SISENSE DOCUMENTATION:
    https://sisense.dev/reference/js/widget/
*/

const _logEventDetails = false;
const _neonYellowBold = 'font-weight: 900; color: #bada55';
const _neonBlueBold = 'font-weight: 900; color: #00e5ff'


// fired when the widget is initialized
widget.on('initialized', function (w) {
    if (_logEventDetails) {
        console.log('%c initialized event fired...', _neonYellowBold);
        console.log(w);
    }
});

// fired when the widget is rendered and added to the dom
widget.on('domready', function (w) {
    if (_logEventDetails) {
        console.log('%c domready event fired...', _neonBlueBold);
        console.log(w);
    }
});

// fired when a widget is refreshed
widget.on('refreshed', function (w) {
    if (_logEventDetails) {
        console.log('%c refreshed event fired...', _neonYellowBold);
        console.log(w);
    }
});

// fired when executing the widget's native build query and allows
// customization of the jaql query object before execution
widget.on('buildquery', function (w, query) {
    if (_logEventDetails) {
        console.log('%c buildquery event fired...', _neonBlueBold);
        console.log(w);
        console.log(query);
    }
});

// fired before the query is executed
widget.on('beforequery', function (w, query) {
    if (_logEventDetails) {
        console.log('%c beforequery event fired...', _neonYellowBold);
        console.log(w);
        console.log(query);
    }
});

// fired when the widget's query starts
widget.on('querystart', function (w) {
    if (_logEventDetails) {
        console.log('%c querystart event fired...', _neonBlueBold);
        console.log(w);
    }
});

// fired when the widget's query has ended
widget.on('queryend', function (w, args) { // args properties: query, rawResult, reason
    if (_logEventDetails) {
        console.log('%c queryend event fired...', _neonYellowBold);
        console.log(w);
        console.log(args);
    }
});

// fired when executing the widget's native result processing, and allows
// customization of the query result before being rendered
widget.on('processresult', function (w, args) { // args properties: query, result, rawResult, reason
    if (_logEventDetails) {
        console.log('%c processresult event fired...', _neonBlueBold);
        console.log(w);
        console.log(args);
    }
});

// fired when the widget is rendered
widget.on('render', function (w, args) { // args properties: reason, disableAnimations
    if (_logEventDetails) {
        console.log('%c render event fired...', _neonYellowBold);
        console.log(w);
        console.log(args);
    }
});

// fired when the widget's rendering is over and the widget is ready
widget.on('ready', function (w) {
    if (_logEventDetails) {
        console.log('%c ready event fired...', _neonBlueBold);
        console.log(w);
    }
});

// fired when a layout change is applied to the widget
widget.on('readjust', function (w) {
    if (_logEventDetails) {
        console.log('%c readjust event fired...', _neonYellowBold);
        console.log(w);
    }
});

// todo: probably has multiple params as an object
// fired when clicking the widget's menu while viewing a dashboard
widget.on('beforewidgetindashboardmenu', function (w, items, el, cancel) {
    if (_logEventDetails) {
        console.log('%c beforewidgetindashboardmenu event fired...', _neonBlueBold);
        console.log(w);
        console.log(items);
        console.log(el);
        console.log(cancel);
    }
});

// todo: probably has multiple params as an object
// fired when clicking the widget menu while in edit widget mode
widget.on('beforewidgetmenu', function (w, items, el, cancel) {
    if (_logEventDetails) {
        console.log('%c beforewidgetmenu event fired...', _neonYellowBold);
        console.log(w);
        console.log(items);
        console.log(el);
        console.log(cancel);
    }
});

// fired before the highcharts object/map configuration is updated/created
widget.on('beforeviewloaded', function (w, el, options) {
    if (_logEventDetails) {
        console.log('%c beforeviewloaded event fired...', _neonBlueBold);
        console.log(w);
        console.log(el);
        console.log(options);
    }
});

// fired for all widgets that render a tooltip. A\allows hooking to the tooltip
// initialization flow, disables the default application tooltip, and creates a
// new tooltip instead, or overrides the default tooltip template
widget.on('beforedatapointtooltip', function (w, args) { // args properties: context, template, cancel
    if (_logEventDetails) {
        console.log('%c beforedatapointtooltip event fired...', _neonYellowBold);
        console.log(w);
        console.log(args);
    }
});

// fired when the widget is destroyed and it's resources are released
widget.on('destroyed', function (w) {
    if (_logEventDetails) {
        console.log('%c destroyed event fired...', _neonBlueBold);
        console.log(w);
    }
});

// todo: probably has multiple params as an object
// fired when a cell is being processed and enables customization
// of the cell attributes (text, data, color, size)
widget.on('processcell', function (w, args) { // args properties: panel, item, row, cell
    if (_logEventDetails) {
        console.log('%c processcell event fired...', _neonYellowBold);
        console.log(w);
        console.log(args);
    }
});




