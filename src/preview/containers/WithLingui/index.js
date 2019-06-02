import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { I18nProvider } from '@lingui/react';
import { EVENT_GET_LOCALE_ID, EVENT_SET_LOCALE_ID } from '../../../shared';

export default function WithLingui(props) {
  const [ locale, setLocale ] = useState(props.linguiConfig.defaultLocale);
  const handleLocale = (locale) => setLocale(locale);

  useEffect(() => {
    const { channel } = props;
    channel.on(EVENT_SET_LOCALE_ID, handleLocale);
    channel.emit(EVENT_GET_LOCALE_ID);
    return () => {
      props.channel.removeListener(EVENT_SET_LOCALE_ID, handleLocale);
    };
  }, []);

  if (!locale) {
    return null;
  }

  const { children, linguiConfig } = props;

  return (
    <I18nProvider {...linguiConfig} language={locale} catalogs={linguiConfig.catalogs}>
      {children}
    </I18nProvider>
  );
}

WithLingui.propTypes = {
  linguiConfig: PropTypes.shape({
    locale: PropTypes.string,
    messages: PropTypes.object,
    defaultLocale: PropTypes.string
  }).isRequired,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  channel: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    removeListener: PropTypes.func.isRequired
  }).isRequired
};
