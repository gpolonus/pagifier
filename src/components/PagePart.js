
import React from 'react'
import { Link } from 'react-router-dom'
import isDarkColor from 'is-dark-color'

const MaybeLink = ({ to, children: c }) => (
  to ?
    <Link to={to}>{c}</Link> :
    c
)

export default ({ text, link, color, styles }) => {

  return (
    <MaybeLink to={link}>
      <div
        className="PagePart"
        style={{
          backgroundColor: color,
          color: isDarkColor(color) ? 'white' : 'black',
          ...styles
        }}
      >
        <div style={styles.textStyles}>{ text }</div>
      </div>
    </MaybeLink>
  )
}
