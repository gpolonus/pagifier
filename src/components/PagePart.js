
import React from 'react'
import isDarkColor from 'is-dark-color'

export default ({ thing: {text, link, color}, redirect, pageId, width }) => {

  function runRedirect() {
    if(link) {
      redirect(link, pageId)
    }
  }

  return (
    <div
      className="PagePart"
      style={{
        backgroundColor: color,
        color: isDarkColor(color) ? 'white' : 'black',
        width: `${width}%`
      }}
      onClick={runRedirect}
    >
      <div>{ text }</div>
    </div>
  )
}
