import { configure, addDecorator } from '@storybook/react';
import { withLingui, setLinguiConfig } from '../dist';

function loadStories() {
  require('./stories/index.js');
}

setLinguiConfig({
  locales: [ 'en', 'fr' ],
  defaultLocale: 'en',
  catalogs: {
    fr: {
      messages: { 'Hello Button': 'Bonjour Bouton' }
    }
  }
});

// Register decorator
addDecorator(withLingui);

configure(loadStories, module);
