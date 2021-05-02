// https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7

const Emoji = ({ symbol, label }) => (
  <span
    className='emoji'
    role='img'
    aria-label={label || ''}
    aria-hidden={!label}
  >
    {symbol}
  </span>
);

export default Emoji;
