import React from 'react'
import './style.scss'

interface ImageContentInterface {
  imageUrl: string
  alt: string
  filterBlue?: boolean
}

const ImageContent: React.FC<ImageContentInterface> = (props) => {
  return (
    <img className={`image-content ${props.filterBlue ? 'image-content--blue' : ''}`} src={props.imageUrl} alt={props.alt} />
  )
}

ImageContent.defaultProps = {
  filterBlue: false
}

export default ImageContent