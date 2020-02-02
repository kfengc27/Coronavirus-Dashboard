import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React from 'react';

export default function ExternalLink({ href, text, className, ...rest }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={classnames('link', className)}
      {...rest}
    >
      <FontAwesomeIcon icon={faExternalLinkAlt} /> {text}
    </a>
  );
}
