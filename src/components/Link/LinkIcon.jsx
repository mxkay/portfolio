import React from 'react';
import { IconContext } from 'react-icons';

const LinkIcon = ({ icon, color }) =>
  <div className='link-icon'>
    <IconContext.Provider value={
            {
              color: color,
              size: '1.8em',
              className: 'global-class-name'
            }
        }
    >
      {icon}
    </IconContext.Provider>
  </div>;

export default LinkIcon;
