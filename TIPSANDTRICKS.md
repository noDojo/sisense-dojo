# The Sisense Front-End: Tips & Tricks

<em>Tested on Version: L2021.3.0 (note: the share option mentioned in step 2 is no longer available in version L2021.7)</em>

### Steps to create, import, and use globally accessible stylesheets:

1. Navigate to the Sisense file manager (Admin > System Management > File Management) and open (or create) the styles folder.
2. Locate (or create) the stylesheet (css file) you would like to import and click the Share option.
3. Copy the link that appears. This will be the link you use to reference your stylesheet from a dashboard.
4. Navigate to the dashboard you want to import your stylesheet into and use the following code snippet (or code with similar logic) to import you stylesheet. This will make the styles in your stylesheet available for use anywhere within this dashboard.

```js
dashboard.on('initialized', function () {
    // include stylesheet by appending to <head> tag
    $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'the link you copied in step 3 goes here'
    });
});
```
