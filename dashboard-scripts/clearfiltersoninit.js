/*  Tested on Version: L2021.3.0

    Clear any filters applied to the dashboard and
    reset dashboard filters to their default state.
*/


var clearFilters = function () {
    let dashboard = prism.activeDashboard;

    // clear any filters applied to the dashboard
    dashboard.filters.clear();

    // set the filters back to the dashboard's default filters
    (dashboard.defaultFilters || []).forEach(function (filter) {
        dashboard.filters.update(filter, { save: true, refresh: false });
    });

    dashboard.refresh();
};


// fired after the dashboard is initialized
dashboard.on('initialized', function (dash) {
    // wait a few seconds as the event fires just before the dashboard is actually ready
    window.setTimeout(clearFilters);
});