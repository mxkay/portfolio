import React from 'react';
import './DevToolList.css';
import DevTool from '../DevTool/DevTool';

const DevToolList = ({ toolNames }) =>
  <div className='dev-tool-list'>
    {toolNames && toolNames[0]
      ? toolNames.map((toolName, index) =>
        <DevTool key={index} name={toolName} />
        )
      : <></>}
  </div>;

export default DevToolList;
