import React from 'react'
import trendingStyles from './trending.css'
import TrendingHousingCard from './TrendingHousingCard'

export const TrendingHousing = (props) => {
  return (
    <div>
      <h2 className={trendingStyles.trendingHeader}>
        Housing
      </h2>
      <div className={trendingStyles.container}>
        <TrendingHousingCard />
      </div>
    </div>
  )
}

export default TrendingHousing
