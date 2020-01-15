
import React from 'react';
import PagePart from './PagePart';
import BackPart from './BackPart';

function getStyles(width, left, link, back) {
  const styles = {
    width: `${width}%`,
    left: `${left}%`
  }

  if(link) {
    styles.textDecoration = 'underline'
  }

  return styles
}

export default ({ pages, location, history }) => {

  const pathId = location.pathname.slice(1)
  const id = pages[pathId] ? pathId : 'index'
  const things = pages[id]
  const back = id !== 'index'

  const partUnits = 5
  const numUnits = things.length * partUnits + (back ? 1 : 0)
  let widthUnit = 100 / numUnits
  if(widthUnit < 3) {
    widthUnit = 3
  }
  const partWidth = widthUnit * partUnits

  const goBack = () => history.goBack()

  return (
    <div className="Page">
      {
        back ?
          <BackPart
            goBack={goBack}
            width={widthUnit}
          /> :
          null
      }
      {
        things.map(({text, color, link}, i) => (
          <PagePart
            key={text}
            text={text}
            color={color}
            link={link}
            styles={getStyles(partWidth, (i * partUnits + (back ? 1 : 0)) * widthUnit, link)}
          />
        ))
      }
    </div>
  )
}
