import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = (props) => {
  return (
    <a href={props.path} target="_blank" className={props.className} rel="noopener">
      {
        props.text ?
        <p>{props.text}</p>
        : null
      }
      <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}

export default Link;