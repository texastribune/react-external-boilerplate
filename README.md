# React Attach
Sometimes, you don't want a full-blown React app. You just want to attach a React-powered widget to an otherwise non-React page. This can help.

## Commands
+ `npm start`: Start the development server, hot reloading included.
+ `npm run build`: Build the bundle and stylesheet for production.

## How to use it
Do your React-y development as you normally would. Go crazy. Build 100 components. We like to put them in the `src/` directory, but that's up to you.

The important stuff lives in `src/index.js` (the Webpack entry point). The function `renderReact()` accepts a DOM element reference, to which your React widget will eventually attach. When you do `npm run build` and drop the script onto your page, it's available in the global scope as `reactAttach.renderWidget()`.

Send that method a DOM reference, and you're done. Example:

```html
  <script src="/path/to/reactAttach.min.js"></script>
  <script>
    var el = document.querySelector('div#foo');
    reactAttach.renderWidget(el);

    // your React widget will attach to <div id="foo">
  </script>
```
