import React from 'react';
import addons from '@storybook/addons';
import WithLingui from './containers/WithLingui';
import { EVENT_SET_CONFIG_ID } from '../shared';

let _config = null;

export const setLinguiConfig = (config) => {
  const { locales, defaultLocale } = config;
  _config = config;
  const channel = addons.getChannel();
  channel.emit(EVENT_SET_CONFIG_ID, {
    locales,
    defaultLocale
  });
};

export const withLingui = (story) => {
  const channel = addons.getChannel();

  return (
    <WithLingui linguiConfig={_config} locales={_config.locales} channel={channel}>
      {story()}
    </WithLingui>
  );
};
