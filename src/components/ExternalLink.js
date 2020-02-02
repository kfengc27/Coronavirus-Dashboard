import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ExternalLink({ href, text, ...rest }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
      <FontAwesomeIcon icon={faExternalLinkAlt} /> {text}
    </a>
  );
}
