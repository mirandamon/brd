import React from 'react'
import { Alert } from 'react-native'
import AppIntro from 'react-native-app-intro'
// import { welcomeStyles } from '../../styles/Welcome'
import Colors from '../../styles/Colors'

// const styles = landingStyles

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
    console.log(index)
  }

  render() {
    const pageArray = [{
      title: 'Buying & Selling.',
      description: 'Meets the 21st Century',
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'You Own Your Feed.',
      description: 'Curate your Collection',
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Your Stuff. Viral.',
      description: 'Say Hi to 7.6 Billion People',
      backgroundColor: Colors.brandPrimaryDarker,
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
