import React, { useCallback } from 'react'
import './style.scss'

interface HomepageGridLayoutInterface {
  children: JSX.Element[]
  smallItems?: boolean
}

const HomepageGridLayout: React.FC<HomepageGridLayoutInterface> = (props: HomepageGridLayoutInterface) => {

  const renderChildren = useCallback(() => {
    return props.children.map((child: JSX.Element) => (
      <div className={`homepage-grid-layout__item ${props.smallItems ? 'homepage-grid-layout__item--small' : ''}`}>
        {child}
      </div>
    ))
  }, [props.children, props.smallItems])

  return (
    <div className={`homepage-grid-layout ${props.smallItems ? 'homepage-grid-layout--small' : ''}`}>
      {renderChildren()}
    </div>
  )
}

HomepageGridLayout.defaultProps = {
  smallItems: false
}

export default HomepageGridLayout