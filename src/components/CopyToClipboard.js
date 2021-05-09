import { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard as Copy } from 'react-copy-to-clipboard';
import Emoji from '../components/Emoji';

const StyledCopyToClipboard = styled.div`
  width: fit-content;
  font-size: 1.4em;
  margin: 0.4em 0;
  
  &>div {
    font-size: inherit;
    width: fit-content;
    display: flex;
    background-color: #DDD;
    border-radius: 0.6em;
    color: black;
    overflow: hidden;

    &>* {
      font-size: inherit;
      padding: 0.4em;
      line-height: 1em;
    }

    &>button {
      width: 2.5em;
      height: 1.8em;
      background-color: #DEF;
      border: none;
      border-left: 2px solid black;
    }
  }
`

const Message = styled.p`
  height: 2em;

  @keyframes fadeout {
    from {
        color: rgba( 255, 255, 255, 1 );
    }
    to {
        color: rgba( 255, 255, 255, 0 );
    }
  }

  ${({ active }) => active} {
    animation-name: fadeout;
    animation-duration: 1s;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }
`

const CopyToClipboard = (text, ariaLabel) => {
  const [copyStatus, setCopyStatus] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const handleCopy = () => {
    setMessageVisible(true);
    setCopyStatus(true);
    setTimeout(() => {
        setCopyStatus(false);
      setTimeout(() => {
        setMessageVisible(false);
      }, 1000);
    }, 1000);
  };
  
  return (
    <StyledCopyToClipboard>
      <div>
        <span>me@mathilda.dev</span>
        <Copy
          onCopy={handleCopy}
          text={text}
        >
          <button>
            <Emoji symbol='📋' label={ariaLabel} />
          </button>
        </Copy>
      </div>
      <Message active={copyStatus} >
        {messageVisible ? 'copied to clipboard!' : ''}
      </Message>
    </StyledCopyToClipboard>
  );
}

export default CopyToClipboard;
