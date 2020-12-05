import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export default ({
  children,
  onClick,
  tip,
  btnClassName,
  tipClassName,
  placementClassName,
}) => (
  <Tooltip title={tip} className={tipClassName} placement={placementClassName}>
    <IconButton onClick={onClick} className={btnClassName}>
      {children}
    </IconButton>
  </Tooltip>
);
