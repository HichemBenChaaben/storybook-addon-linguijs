# Lingui react Addon
The linguijs react addon can be used to provide locale switcher and linguijs react.

![](docs/screenshot.png)

## Getting Started

First, install the addon

```shell
npm install -D storybook-addon-linguijs
```

_Note: Following peer dependencies are required: `@storybook/addons`, `@storybook/react`, `react` and `lingui/react`._

Add this line to your `addons.js` file (create this file inside your storybook config directory if needed).

```js
import 'storybook-addon-linguijs/register';
```

In your `config.js` import the `setLinguiConfig` and `withLingui` function. Use `setLinguiConfig` to set the configuration
for `lingui/react` and `withLingui as decorator.

```js
import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withLingui } from 'storybook-addon-linguijs';

// Provide a catalog or import and use your existing one
const catalog = {
  "en": {
    messages: {
      "Hello Button": "Hello Button"
    }
  },
  "fr": {
    messages: {
      "Hello Button": "Bonjour Button"
    }
  }
};

// Set configuration
setLinguiConfig({
  locales: [ 'en', 'fr' ],
  defaultLocale: 'en',
  catalogs
});


// Register decorator
addDecorator(withLingui);

// Run storybook
configure(() => require('./stories'), module);
```

In your story you need to wrap your component with `<Trans>` or a `t` function from `@lingui/macro`


```js
storiesOf('Button', Module).add('with text', () =>
  <Button>
    <Trans>Hello Button</Trans>
  </Button>
);
```
