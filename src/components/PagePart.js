
import React from 'react'
import { Link } from 'react-router-dom'
import isDarkColor from 'is-dark-color'

const log = (arg) => (console.log(arg), arg)

const MaybeLink = ({ to, children: c }) => (
  to ?
    <Link to={to}>{c}</Link> :
    c
)

export default ({ text, link, color, goBack, styles }) => {

  function runBack() {
    if(goBack) {
      goBack()
    }
  }

  return (
    <MaybeLink to={link}>
      <div
        className="PagePart"
        style={{
          backgroundColor: color,
          color: isDarkColor(log(color)) ? 'white' : 'black',
          ...styles
        }}
        onClick={runBack}
      >
        <div style={styles.textStyles}>{ text }</div>
      </div>
    </MaybeLink>
  )
}
