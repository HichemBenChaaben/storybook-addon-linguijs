import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  height: '50px',
  width: '100px',
  padding: '5px',
  border: 0,
  borderRight: '1px solid #d3d3d3',
  borderBottom: '1px solid #d3d3d3',
  background: 'none',
  lineHeight: '30px',
  textAlign: 'center',
  textTransform: 'uppercase',
  transitionProperty: 'background',
  transitionDuration: '100ms',
  transitionTimingFunction: 'linear'
};

export const activeStyle = {
  background: '#f7f7f7',
  fontWeight: 'bold'
};

function style(props) {
  return {
    ...defaultStyle,
    ...(props.active ? activeStyle : {})
  };
}

export default function LocaleButton(props) {
  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      props.onClick(props.locale);
    },
    [ props.locale ]
  );

  return (
    <button type="button" style={style(props)} onClick={handleClick}>
      {props.locale}
    </button>
  );
}

LocaleButton.propTypes = {
  locale: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
