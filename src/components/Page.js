
import React from 'react';
import PagePart from './PagePart';

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
          <PagePart pageId={id} thing={backThing} redirect={goBack} width={widthUnit} /> :
          null
      }
      {
        things.map(t => (
          <PagePart key={t.text} pageId={id} thing={t} redirect={redirect} width={partWidth} />
        ))
      }
    </div>
  )
}
