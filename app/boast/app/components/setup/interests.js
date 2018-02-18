import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import { RoundButton } from 'react-native-button-component'
import { loadingStyles } from '../../styles/Loading'
import Colors from '../../styles/Colors'
import Svg,{
  Circle,
} from 'react-native-svg'
import Interactable from 'react-native-interactable'
import * as Animatable from 'react-native-animatable'

const styles = loadingStyles

export default class Interests extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
    title: 'Your Interests'
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.Text
          ref={((text) => { this.gettingStartedText = text })}
          animation="zoomInUp"
          duration={2000}
          onAnimationEnd={() => this.gettingStartedText.fadeOutUp()}
        >
          <Text style={styles.heading}>Let's get started!</Text>
        </Animatable.Text>
        <Interactable.View
          horizontalOnly
          snapPoints={[{x: 0}, {x: -200}]}
          onSnap={this.onDrawerSnap}>
          <Svg
            height="100"
            width="100"
          >
            <Circle
              cx="50"
              cy="50"
              r="45"
              fill="green"
            />
          </Svg>
        </Interactable.View>
        <Interactable.View
          horizontalOnly
          snapPoints={[{x: 0}, {x: -200}]}
          onSnap={this.onDrawerSnap}>
          <Svg
            height="100"
            width="100"
          >
            <Circle
              cx="29"
              cy="29"
              r="45"
              fill="green"
            />
          </Svg>
        </Interactable.View>
      </View>
    )
  }
}
