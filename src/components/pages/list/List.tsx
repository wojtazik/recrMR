import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../config/routes'
import { Id } from '../../../models/IdentifierType'
import HouseListItem from '../../HouseListItem/HouseListItem'
import useComponent from './hook'
import './style.scss'

const HousesList = () => {
  const { housesIds, isRequestLoading } = useComponent()
  const { t } = useTranslation()

  const renderLoadingView = () => {
    return (<div>Loading...</div>)
  }

  const renderHousesList = useCallback(() => {
    return housesIds.map((id: Id) => (
      <HouseListItem  id={id} key={`HouseList-${id}`}/> 
    ))
  }, [housesIds])

  return (
    <div className='homes-list'>
      <div>
        <Link to={ROUTES.HOUSE_ADD}>{t('houses-list.add-home')}</Link>
      </div>
      <div className='homes-list__wrapper'>
      { isRequestLoading ? renderLoadingView() : renderHousesList() }
      </div>
    </div>
  )
}

export default HousesList