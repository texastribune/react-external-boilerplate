# React External Boilerplate
Trying to develop a React app inside a code base that's predominantly something else -- Django or Rails, for example - can be annoying. If you wan't hot reloading and all that jazz, you're likely going to have to find a way to get Node.js running on top of your existing server. It's not impossible, but it's also not fun.

This boilerplate doesn't fix that issue but rather gives you some tools for building your React app as a separate repository, then bringing it into your main code base during its build process.

It's all super basic stuff -- but it'll save you a few minutes.

## Commands
+ `npm start`: Start the development server, hot reloading included.
+ `npm run build`: Build the bundle and stylesheet for production.

## How to use it
Do your React-y development as you normally would. Go crazy. Build 100 components. We like to put them in the `src/` directory, but that's up to you.

The important stuff lives in `src/index.js` (the Webpack entry point). During development, your app will simply attach to the DOM node specified in the `isDev` conditional block. But after doing `npm run build`, the bundle has three special qualities:
1. It exports `App` as a CommonJS module. That means you can put your React app on NPM and include it in your main code base's `package.json`. This will allow for statements like `import App from YourSeparateReactApp` throughout your main code base.
2. It exports the object `baseProps`, which contains props defined in `src/index.js` that are sent to `<App/>`. This is useful if your workflow is something like that described in No. 1. You can define additional props inside your main code base and send both those **and** `baseProps` to `<App/>`.
3. It exports the method `renderApp()`. This method accepts a DOM element as its first argument -- to which your React app widget will eventually attach. You can also send an object of additional props as the second argument. `renderApp()` could be useful if, instead of putting your package on NPM, you're putting the production bundle on a CDN.

## Examples
### Importing your React app into your main code base
```js
  import React from 'react';
  import ReactDOM from 'react-dom';

  import { App, baseProps } from 'YourSeparateReactApp';

  const additionalProps = { bar: 'foo' };

  ReactDOM.render(
    <App {...additionalProps} {...baseProps} />,
    document.getElementById('root')
  );
```

### Using a CDN
```html
  <script src="https://mycdn.org/reactExternal.min.js"></script>
  <script>
    var el = document.querySelector('#foo');
    var additionalProps = { bar: 'foo' };

    reactExternal.renderApp(el, additionalProps);
    /**
      Your React widget will attach to <div id="foo">.
      Nothing fancy at all -- just allows you to define
      your React app's attachment point inside the
      document instead of that logic floating
      somewhere in the CDN code.
    */
  </script>
```
