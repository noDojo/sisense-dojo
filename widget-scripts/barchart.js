/*  Tested on Version: L2021.7.0

    Logic to set the widget title using its Highcharts
    configs. Also contains logic to restrict the number
    of characters allowed in axis labels.
*/


const _titleText = 'This is my title.';
const _descriptionText = 'This is a description.';
const _titleHtml = `<div class="chart-title">${_titleText}</div><div class="chart-desccription-text">${_descriptionText}></div>`;
const _titleAlign = 'left';
const _titlePosition = -4;
const _maxLabelChars = 12;

// set and style title
widget.on('processresult', function (w, args) {
    let title = args.result.title;
    title.text = _titleHtml;
    title.useHTML = true;
    title.align = _titleAlign;
    title.y = _titlePosition;
});

// restrict number of characters allowed in labels
widget.on('beforeviewloaded', function (w, args) {
    args.options.xAxis.labels.formatter = function () {
        let text = this.value;
        return text.length <= _maxLabelChars ? text : text.substring(0, _maxLabelChars) + '...';
    };
});