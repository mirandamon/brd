import React from 'react'
import trendingStyles from './trending.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export const TrendingHousingCard = (props) => {
  return (
    <Card className={trendingStyles.card}>
      <CardMedia>
        <img src='https://a0.muscache.com/im/pictures/5cddb278-adb9-407d-b784-209676547149.jpg?aki_policy=poster' 
          className={trendingStyles.cardImage} />
      </CardMedia>
      <CardTitle
        title='Lorem Ipsum'
        subtitle='Test Subtitle'
        style={trendingStyles.cardText}
      />
    </Card>
  )
}

export default TrendingHousingCard
