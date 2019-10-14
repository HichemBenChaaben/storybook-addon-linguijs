import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EVENT_SET_CONFIG_ID, EVENT_GET_LOCALE_ID, EVENT_SET_LOCALE_ID } from '../../../shared';

import LocaleButton from '../../components/LocaleButton';

const panelStyle = {
  flexGrow: 0,
  display: 'flex',
  alignSelf: 'flex-start',
  flexWrap: 'wrap'
};

export default function LocalePanel(props) {
  const [ locales, setLocales ] = useState([]);
  const [ activeLocale, setActiveLocale ] = useState(null);

  const setConfig = (config) => {
    const { locales, defaultLocale } = config;
    let activeLocale = activeLocale;
    // If active locale is not in the list of available locales use default locale as new active
    if (!activeLocale || !~locales.indexOf(activeLocale)) {
      activeLocale = defaultLocale;
    }
    setLocales(locales);
    setActiveLocale(activeLocale);
  };

  const getLocale = () => {
    props.channel.emit(EVENT_SET_LOCALE_ID, activeLocale);
  };

  const handleClickLocaleButton = (locale) => {
    setActiveLocale(locale);
    props.channel.emit(EVENT_SET_LOCALE_ID, locale);
  };

  useEffect(() => {
    return () => {
      props.channel.removeListener(EVENT_SET_CONFIG_ID, setConfig);
      props.channel.removeListener(EVENT_GET_LOCALE_ID, getLocale);
    };
  }, []);

  props.channel.on(EVENT_SET_CONFIG_ID, setConfig);
  props.channel.on(EVENT_GET_LOCALE_ID, getLocale);

  const items = locales.map((locale) => {
    return (
      <LocaleButton key={locale} locale={locale} active={locale === activeLocale} onClick={handleClickLocaleButton} />
    );
  });


  if (!props.active) {
    return null
  }

  return <div style={panelStyle}>{items}</div>;
}

LocalePanel.propTypes = {
  active: PropTypes.bool.isRequired,
  channel: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    removeListener: PropTypes.func.isRequired
  }).isRequired
};

// export default LocalePanel;
