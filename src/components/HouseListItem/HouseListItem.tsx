import React from 'react'
import { useTranslation } from 'react-i18next';
import { Id } from '../../models/IdentifierType';
import useComponent from './hook';
import './style.scss'

export interface HouseListItemInterface {
  id: Id
}

const HouseListItem: React.FC<HouseListItemInterface> = (props) => {
  const { houseDescriptor, onGoToHouseDetails, onHouseRemove } = useComponent(props)
  const { t } = useTranslation()

  return (
    <div className='house-list-item'>
      <h4 className='house-list-item__label'>{houseDescriptor?.label || t('general.unknown')}</h4>
      <div className='house-list-item__detail'>
        <span>{t('general.address')}:</span>
        <span>{houseDescriptor?.address || t('general.no-address')}</span>
      </div>
      <div className='house-list-item__detail'>
        <span>{t('general.floors-number')}:</span>
        <span>{houseDescriptor?.floorsNumber || t('general.unknown')}</span>
      </div>
      <div className='house-list-item__detail'>
        <span>{t('general.description')}:</span>
        <span>{houseDescriptor?.description || t('general.unknown')}</span>
      </div>
      <div className="house-list-item__buttons">
        <button onClick={onGoToHouseDetails} className='house-list-item__button house-list-item__button--green'>
          {t('general.see-details')}
        </button>
        <button onClick={onHouseRemove} className='house-list-item__button house-list-item__button--red'>
          {t('general.remove')}
        </button> 
      </div>
    </div>
  )
}

export default HouseListItem