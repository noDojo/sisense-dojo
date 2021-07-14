/*  Tested on Version: L2021.3.0

    Uses a boolean flag to show/hide the default arguments
    passed to each dashboard-level event handler.

    NOTE: Some arguments may be passed in inside of an object.
          Locating these handler args is a wip.

    RELEVANT SISENSE DOCUMENTATION:
    https://sisense.dev/reference/js/dashboard/dashboard-widgets.html
*/

const _logEventDetails = false;
const _neonYellowBold = 'font-weight: 900; color: #bada55';
const _neonBlueBold = 'font-weight: 900; color: #00e5ff'


// fired after the dashboard is initialized
dashboard.on('initialized', function (dash) {
    if (_logEventDetails) {
        console.log('%c initialized event fired...', _neonYellowBold);
        console.log(dash);
    }
});

// fired after one or more widgets have started the refresh process
dashboard.on('refreshstart', function (dash, totalQueries) {
    if (_logEventDetails) {
        console.log('%c refreshstart event fired...', _neonBlueBold);
        console.log(dash);
        console.log(totalQueries);
    }
});

// fired when a refresh process ends for one or more widgets
dashboard.on('refreshend', function (dash, completedQueries) {
    if (_logEventDetails) {
        console.log('%c refreshend event fired...', _neonYellowBold);
        console.log(dash);
        console.log(completedQueries);
    }
});

// fired when a widget refresh ends
dashboard.on('widgetrefreshed', function (dash, w, totalQueries, completedQueries) {
    if (_logEventDetails) {
        console.log('%c widgetrefreshed event fired...', _neonBlueBold);
        console.log(dash);
        console.log(w);
        console.log(totalQueries);
        console.log(completedQueries);
    }
});

// fired when a widget is added to the dashboard
dashboard.on('widgetadded', function (dash, w, layout) {
    if (_logEventDetails) {
        console.log('%c widgetadded event fired...', _neonYellowBold);
        console.log(dash);
        console.log(w);
        console.log(layout);
    }
});

// fired when the dashboard style is changed
dashboard.on('stylechanged', function (dash) {
    if (_logEventDetails) {
        console.log('%c stylechanged event fired...', _neonBlueBold);
        console.log(dash);
    }
});

// fired when the dashboard is destroyed
dashboard.on('destroyed', function (dash) {
    if (_logEventDetails) {
        console.log('%c destroyed event fired...', _neonYellowBold);
        console.log(dash);
    }
});

// fired when entering edit mode
dashboard.on('editstart', function (dash) {
    if (_logEventDetails) {
        console.log('%c editstart event fired...', _neonBlueBold);
        console.log(dash);
    }
});

// fired when leaving edit mode
dashboard.on('editend', function (dash) {
    if (_logEventDetails) {
        console.log('%c editend event fired...', _neonYellowBold);
        console.log(dash);
    }
});

// fired when the dashboard filter changes
dashboard.on('filterschanged', function (dash, type, items) {
    if (_logEventDetails) {
        console.log('%c filterschanged event fired...', _neonBlueBold);
        console.log(dash);
        console.log(type);
        console.log(items);
    }
});

// fired for each of the dashboard's widgets when each is initialized
dashboard.on('widgetinitialized', function (w) {
    if (_logEventDetails) {
        console.log('%c widgetinitialized event fired...', _neonYellowBold);
        console.log(w);
    }
});

// fired when executing the widget’s native build query, and allows
// customization of the JAQL query object before execution
dashboard.on('widgetbuildquery', function (w, query) {
    if (_logEventDetails) {
        console.log('%c widgetbuildquery event fired...', _neonBlueBold);
        console.log(w);
        console.log(query);
    }
});

// fired before the query is executed
dashboard.on('widgetbeforequery', function (w, query) {
    if (_logEventDetails) {
        console.log('%c widgetbeforequery event fired...', _neonYellowBold);
        console.log(w);
        console.log(query);
    }
});

// todo: probably has multiple params as an object
// fired after executing the widget’s native result processing, and allows
// customization of the query result before being rendered
dashboard.on('widgetprocessresult', function (w, query, result, rawQueryResult, reason) {
    if (_logEventDetails) {
        console.log('%c widgetprocessresult event fired...', _neonBlueBold);
        console.log(w);
        console.log(query);
        console.log(result);
        console.log(rawQueryResult);
        console.log(reason);
    }
});

// fired when the widget is rendered
dashboard.on('widgetrender', function (w, reason, disableAnimations) {
    if (_logEventDetails) {
        console.log('%c widgetrender event fired...', _neonYellowBold);
        console.log(w);
        console.log(reason);
        console.log(disableAnimations);
    }
});

// fired when the widget’s rendering is complete and the widget is ready
dashboard.on('widgetready', function (w) {
    if (_logEventDetails) {
        console.log('%c widgetready event fired...', _neonBlueBold);
        console.log(w);
    }
});

// todo: probably has multiple params as an object
// fired before a widget shown in a dashboard shows it’s context menu
dashboard.on('beforewidgetmenu', function (w, items, el, cancel) {
    if (_logEventDetails) {
        console.log('%c beforewidgetmenu event fired...', _neonYellowBold);
        console.log(w);
        console.log(items);
        console.log(el);
        console.log(cancel);
    }
});

// fired when the widget is destroyed and it’s resources are released
dashboard.on('widgetdestroyed', function (w) {
    if (_logEventDetails) {
        console.log('%c widgetdestroyed event fired...', _neonBlueBold);
        console.log(w);
    }
});
