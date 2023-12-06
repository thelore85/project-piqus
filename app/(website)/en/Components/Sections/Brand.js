import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fawordpress } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

export default function Brand({icon, title}) {
  return (
    <div className="d-inline-block p-2">
      <FontAwesomeIcon icon={icon} className="" />
      <p>{title}</p>
    </div>
  )
}
