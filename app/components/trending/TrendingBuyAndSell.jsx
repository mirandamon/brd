import React from 'react'
import trendingStyles from './trending.css'
import TrendingBuyAndSellCard from './TrendingBuyAndSellCard'

export const TrendingBuyAndSell = (props) => {
  return (
    <div>
      <h2 className={trendingStyles.trendingHeader}>
        Buy & Sell
      </h2>
      <div className={trendingStyles.container}>
        <TrendingBuyAndSellCard />
      </div>
    </div>
  )
}

export default TrendingBuyAndSell
