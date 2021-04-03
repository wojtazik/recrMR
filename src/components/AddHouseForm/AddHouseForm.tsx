import React from 'react'
import { useTranslation } from 'react-i18next'
import useComponent from './hook'

const AddHouseForm = () => {
  const { t } = useTranslation()
  const { formik } = useComponent()

  return (
    <form>
      <div>
        <span>{t('general.label')}</span>
        <input 
          type='text'
          name='label'
          value={formik.values.label}
          onChange={formik.handleChange}  
        />
      </div>
      <div>
        <span>{t('general.address')}</span>
        <input 
          type='text'
          name='address'
          value={formik.values.address}
          onChange={formik.handleChange}  
        />
      </div>
      <div>
        <span>{t('general.floors-number')}</span>
        <input 
          type='number'
          name='floorsNumber'
          value={formik.values.floorsNumber}
          onChange={formik.handleChange}  
        />
      </div>
      <div>
        <span>{t('general.description')}</span>
        <input 
          type='text'
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}  
        />
      </div>
      <button type="submit">{t('general.add')}</button>
    </form>
  )
}

export default AddHouseForm