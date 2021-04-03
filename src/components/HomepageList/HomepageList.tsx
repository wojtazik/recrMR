import React, { useCallback } from 'react'
import './style.scss'

interface HomepageListInterface {
  listItems: string[]
}

const HomepageList: React.FC<HomepageListInterface> = (props) => {
  const renderHomepageList = useCallback(() => {
    return props.listItems.map((listItem: string, index: number) => (
      <li
        key={`homepage-list-item-${listItem}-${index}`}
        className='homepage-list__item'
      >
        {listItem}
      </li>
    ))
  }, [props.listItems])
  
  return (
    <ul className='homepage-list'>
      {renderHomepageList()}
    </ul>
  )
}

export default HomepageList