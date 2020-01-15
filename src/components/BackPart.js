
import React from 'react'

export default ({ goBack, width }) => {

  function runBack() {
    if(goBack) {
      goBack()
    }
  }

  return (
    <div
      className="PagePart BackPart"
      onClick={runBack}
      style={{width: `${width}%`}}
    >
      <div>Back</div>
    </div>
  )
}
