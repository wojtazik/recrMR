import React from 'react'
import { useTranslation } from 'react-i18next'
import HomepageGridLayout from '../../HomepageGridLayout/homepageGridLayout'
import HomepageList from '../../HomepageList/HomepageList'
import HomepageTextSection from '../../HomepageTextSection/HomepageTextSection'
import ImageContent from '../../ImageContent/ImageContent'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <HomepageGridLayout>
      <HomepageTextSection
          mainTitle={t('homepage.title.about-us')}
          subtitle={t('homepage.subtitle.about-us')}
          textContent={t('homepage.text.lorem', { interpolation: { escapeValue: false } })}
          buttonText={t('homepage.button.see-more')}
      />
      <HomepageGridLayout smallItems>
        <ImageContent
          imageUrl='https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='image 1'
        />
        <ImageContent
          imageUrl='https://da28rauy2a860.cloudfront.net/completehome/wp-content/uploads/2021/01/21163931/001-Macquarie-zenith-facades_DSC8047_v4a-R.jpg'
          alt='image 2'
          filterBlue
        />
        <ImageContent
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCVJHMY-cwl1bt_eLyoRdBauh01NTDBu5a1F-EO7BKCgc9nzQkmShdCbDjm4jFG4Pbqs&usqp=CAU'
          alt='image 3'
          filterBlue
        />
        <ImageContent
          imageUrl='https://www.goalcast.com/wp-content/uploads/2017/06/Mahatma-Gandhi-quote-In-a-gentle-way-you-can-shake-the-world-1280x720.jpg'
          alt='image 4'
        />
      </HomepageGridLayout>
      <HomepageList 
        listItems={[
          t('homepage.list-items.wooden-homes-building'),
          t('homepage.list-items.gates-building'),
          t('homepage.list-items.finishing-interior'),
          t('homepage.list-items.garden-gazebos'),
          t('homepage.list-items.stone-architecture-elements'),
          t('homepage.list-items.renovations'),
        ]}
      />
      <HomepageTextSection
        mainTitle={t('homepage.title.our-offer')}
        subtitle={t('homepage.subtitle.what-we-can-offer-you')}
        textContent={t('homepage.text.lorem', { interpolation: { escapeValue: false } })}
        buttonText={t('homepage.button.see-more')}
      />
    </HomepageGridLayout>
  )
}

export default Home