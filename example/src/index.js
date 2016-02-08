import React from 'react';
import { render } from 'react-dom';

import AtvImg from 'react-atv-img';

const rootDivStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(238, 239, 244, 1)',
};

render(
  <div style={rootDivStyle}>
    <AtvImg
      staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
      style={{ width: 320, height: 190 }}
    >
      <img style={{ maxWidth: '100%' }} src="http://kloc.pm/images/back.png" />
      <img style={{ maxWidth: '100%' }} src="http://kloc.pm/images/front.png" />
    </AtvImg>
  </div>,
  document.getElementById('root')
);
