
import React from 'react';
import PagePart from './PagePart';

function getStyles(width, left, link) {
  const styles = {
    width: `${width}%`,
    left: `${left}%`
  }

  if(link) {
    styles.textDecoration = 'underline'
  }

  return styles
}

export default ({ id, things, back, goBack, redirect }) => {

  const backThing = {
    text: "Back",
    color: "#000000",
    link: true
  }

  const numUnits = things.length * 3 + (back ? 1 : 0)
  const widthUnit = 100 / numUnits
  const partWidth = widthUnit * 3

  return (
    <div className="Page">
      {
        back ?
          <PagePart
            pageId={id}
            thing={backThing}
            redirect={goBack}
            styles={getStyles(widthUnit, 0, true)}
          /> :
          null
      }
      {
        things.map((t, i) => (
          <PagePart
            key={t.text}
            pageId={id}
            thing={t}
            redirect={redirect}
            styles={getStyles(partWidth, (i * 3 + (back ? 1 : 0)) * widthUnit, t.link)}
          />
        ))
      }
    </div>
  )
}
