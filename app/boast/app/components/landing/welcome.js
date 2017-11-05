import React from 'react'
import { Alert } from 'react-native'
import AppIntro from 'react-native-app-intro-v2'

export default class Welcome extends React.Component {
  onSkipBtnHandle = (index) => {
    Alert.alert(`Skipping ${index}`)
  }

  onSlideChangeHandle = (index, total) => {
    console.log(index, total)
  }

  doneBtnHandle = () => {
    Alert.alert('Done')
  }

  nextBtnHandle = (index) => {
    Alert.alert('Next')
    console.log(index)
  }

  render() {
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      statusBarColor: '#fa931d', // If you don't specify, a 30% darker color will be inferred from your background color.
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',
      img: require('../assets/some_image.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }]
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    )
  }
}
