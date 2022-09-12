import React from 'react';
import IcoMoon from 'react-icomoon';
const iconSet = require('./Assets/Icons/icomoon/selection.json');
const Icon = ({ ...props }) => {
  return (
    <IcoMoon  iconSet={iconSet} {...props} />
  );
};
Icon.defaultProps = {
  
};
export default Icon;