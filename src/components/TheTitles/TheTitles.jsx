import React from 'react'
import './TheTitles.css'

const TheTitles = ({preHeading, sectionHeading, sectionIntro}) => {
  return (
    <div className='section--title-wrapp'>
        <p className="section__preheading">{preHeading}</p>
        <h2 className="section__heading">{ sectionHeading }</h2>
        <p className="section__intro">{ sectionIntro }</p>
    </div>
  )
}

export default TheTitles