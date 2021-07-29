/*  Tested on Version: L2021.7.0

    Creates a button on the dashboard's toolbar to download
    a single JavaScript file containing the dashboard script
    and the script from each of the  widgets being used on
    the dashboard. When this `Download Scripts` button is
    clicked, a new tab is opened that displays the contents
    of the JavaScript file that has been created.

    This can be used to facilitate version control (manually)
    for dashboard and widget scripts. The JavaScript file that
    is displayed in the new tab following the button click
    can just be copy/pasted into a new file in any repository.
*/

var downloadScripts = function () {
    let dashboard = prism.activeDashboard;
    const fileDivider =
    '\n\n/*************************************************/\n\n';
    const fileType = 'text/plain';
    let widgetScripts = dashboard.script + fileDivider;

    dashboard.widgets.$$widgets.forEach(function (w) {
        widgetScripts += w.script;
        widgetScripts += fileDivider;
    });

    let file = new Blob([widgetScripts], { type: fileType });
    window.open(URL.createObjectURL(file));
};

var addDownloadScriptsButton = function () {
    if ($('#download-scripts-button').length) { return; }

    let downloadScriptsButton = $([
        '<button id="download-scripts-button" class="btn btn--transp" title="Download Scripts">',
            '<span class="btn__text">Download Scripts</span>',
        '</button>',
    ].join(''));

    let toolbarRight = $('.prism-toolbar__section--right .prism-toolbar__cell.btns-holder');
    toolbarRight.prepend(downloadScriptsButton);

    toolbarRight.on('click', '#download-scripts-button', downloadScripts);
};

dashboard.on('initialized', function (dash, args) {
    window.setTimeout(addDownloadScriptsButton);
});
