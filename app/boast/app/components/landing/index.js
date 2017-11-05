import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { RoundButton } from 'react-native-button-component'
import Colors from '../../styles/Colors'
import Video from 'react-native-video'
import { landingStyles } from '../../styles/Landing'
import { globals } from '../../styles/Globals'

const styles = landingStyles

export default class Landing extends React.Component {
  static navigationOptions = {
    header: null,
  }

  visitLogin = () => {
    this.props.navigation.navigate('Login')
  }

  visitRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View>

        <Video
          source={require('../../assets/videos/background.mp4')} // Can be a URL or a local file.
          rate={1.0} // 0 is paused, 1 is normal.
          volume={0} // 0 is muted, 1 is normal.
          muted // Mutes the audio entirely.
          paused={false} // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat // Repeat forever.
          playInBackground={false} // Audio continues to play when app entering background.
          playWhenInactive // [iOS] Video continues to play when control or notification center are shown.
          style={styles.backgroundImage}
        />

        <View style={styles.container}>
          <RoundButton
            gradientStart={{ x: 0.5, y: 1 }}
            gradientEnd={{ x: 1, y: 1 }}
            backgroundColors={[Colors.brandPrimary, Colors.brandPrimaryDarker]}
            onPress={this.visitLogin}
            text="Login"
            style={styles.loginButton}
          />
          <RoundButton
            gradientStart={{ x: 0.5, y: 1 }}
            gradientEnd={{ x: 1, y: 1 }}
            backgroundColors={[Colors.brandPrimary, Colors.brandPrimaryDarker]}
            onPress={this.visitRegister}
            text="Register"
            style={styles.registerButton}
          />
        </View>

      </View>
    )
  }
}
