import React from 'react';
import { storiesOf } from '@storybook/react';
// import { addDecorator } from '@storybook/react';
import { Button } from '@storybook/react/demo';
// import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/macro';

// const style = {
//   position: 'absolute',
//   right: '0',
//   padding: '0 15px'
// };

// const defaultStyle = {
//   padding: '15px',
//   border: '1px solid #ebeced',
//   margin: '1px',
//   fontSize: '14px',
//   cursor: 'pointer'
// };

// const activeStyle = {
//   background: 'gray',
//   color: 'white'
// };

// const buttonStyle = (props) => {
//   return {
//     ...defaultStyle,
//     ...(props.active ? activeStyle : {})
//   };
// };

// const SwitchLang = ({ onChange, locales, selectedLang }) => (
//   <div style={style}>
//     {locales.map((lang, index) => (
//       <button style={buttonStyle({ active: selectedLang === lang })} id={index} onClick={() => onChange(lang)}>
//         {lang}
//       </button>
//     ))}
//   </div>
// );

// function WithStuff({ config, children }) {
//   const { defaultLang, catalogs, withViewPort, locales } = config;
//   const [ lang, useLang ] = useState(defaultLang);
//   return (
//     <I18nProvider language={lang} catalogs={{ ...catalogs }}>
//       {withViewPort && <SwitchLang selectedLang={lang} onChange={useLang} locales={locales} />}
//       {children}
//     </I18nProvider>
//   );
// }

// const WithLingui = (config) => (story) => <WithStuff config={config}>{story()}</WithStuff>;

// const config = {
//   withPanel: false,
//   withViewPort: true,
//   defaultLang: 'en',
//   locales: [ 'en', 'fr', 'ar' ],
//   catalogs: {
//     fr: {
//       messages: { xxx: 'xxx french' }
//     }
//   }
// };

// addDecorator(WithLingui(config));

storiesOf('Button', module).add('with text', () => (
  <Button>
    <Trans>Hello Button</Trans>
  </Button>
));
