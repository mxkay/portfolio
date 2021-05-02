// https://github.com/apostrophecms/sanitize-html
import sanitizeHtml from 'sanitize-html';

const Sanitize = ({ html }) => {
  const clean = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'span']),
    allowedAttributes: false
  });

  return (
    <span
      className='sanitized-html'
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default Sanitize;
