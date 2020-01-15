
import React from 'react';
import PagePart from './PagePart';

function getStyles(width, left, link, back) {
  const styles = {
    width: `${width}%`,
    left: `${left}%`
  }

  if(link) {
    styles.textDecoration = 'underline'
  }

  if(back) {
    styles.textStyles = {
      transform: 'rotate(-90deg)'
    }
  }

  return styles
}

export default ({ pages, location, history }) => {

  const id = location.pathname.slice(1)
  const things = pages[id] || pages.index
  console.log(id, location)
  console.log(things)
  const back = true

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
          <PagePart
            pageId={id}
            text="Back"
            color="#000000"
            goBack={goBack}
            styles={getStyles(widthUnit, 0, true, true)}
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
