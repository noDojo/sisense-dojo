/*  Tested on Version: L2021.7.0

    Injects html into the DOM to create tabs that trigger
    a switch to another dashboard. A copy of this code
    would need to be added to the top widget on the other
    dashboard to provide a way for the user to navigate
    back to the original dashboard.
*/

const _dashboardTwoId = "dashboardtowidgoeshere";

const _tabStyles = {
    'display': 'inline-block',
    'height': '50px',
    'width': '154px',
    'padding': '15px',
    'cursor': 'pointer',
    'color': '#1873ab',
    'text-align': 'center'
};
const _tabTextStyles = {
    'font-size': '16px',
    'line-height': '20px',
    'font-weight': '700',
    'text-decoration': 'none'
};
const _activeTabStyles =  {
    'border-bottom': '#1873ab 3px solid'
};

widget.on('ready', function () {
    if ($('#tabs-container').length === 0) {
        var tabsContainer = 
            $(`<nav id="tabs-container">
                    <ul>
                        <li id="dashboard-one-tab" class="active">
                            <a>Dashboard One</a>
                        </li>
                        <li id="dashboard-two-tab">
                            <a>Dashboard Two</a>
                        </li>
                    </ul>
                </nav>`);

        const widgetElement = prism.$ngscope.appstate === 'dashboard' ? $('widget[widgetid="' + w.oid + '"]') : undefined;
        widgetElement.closest('div.dashboard-layout').prepend(tabsContainer);

        $('#dashboard-one-tab, #dashboard-two-tab').css(_tabStyles);
        $('#tabs-container').css('box-shadow', 'inset 0 -1px 0 #ddd').children('ul').css('margin-left', '28px').find('li > a').css(_tabTextStyles);
        $('#dashboard-one-tab.active').css(_activeTabStyles).children('a').css('color', '#333');

        $('#dashboard-two-tab').on('click', function () {
            let origin = window.location.origin;
            let pathname = window.location.pathname;
            let dashboardTwoUrl = origin + pathname + '#/dashboards/' + _dashboardTwoId;

            window.location = dashboardTwoUrl;
        });
    }
});