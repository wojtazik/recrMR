import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import './style.scss'

interface HomepageTextSectionInterface {
  mainTitle: string,
  subtitle: string
  textContent: string
  buttonText: string
}

const HomepageTextSection: React.FC<HomepageTextSectionInterface> = (props: HomepageTextSectionInterface) => {
  return (
    <div className='homepage-section'>
      <h2 className='homepage-section__title'>{props.mainTitle}</h2>
      <h3 className='homepage-section__subtitle'>{props.subtitle}</h3>
      <p className='homepage-section__text-content'>{props.textContent}</p>
      <Link to={ROUTES.HOUSES} className='homepage-section__button'>{props.buttonText}</Link>
    </div>
  )
}

export default HomepageTextSection