import React from 'react';
import './StickyHeader.css';

import Nav from '../Nav/Nav';

const StickyHeader = ({ isSticky, forwardedRef }) =>
  <div className={`sticky-header-wrapper ${isSticky ? 'sticky' : ''}`} ref={forwardedRef}>
    <div className={`sticky-header ${isSticky ? 'sticky' : ''}`}>
      <Nav />
    </div>
  </div>;

export default StickyHeader;
