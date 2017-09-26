import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');


export const landingStyles = StyleSheet.create({
  container: {
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  loginButton: {
    flexDirection: 'row',
    flex: 0.6,
    height: 40,
    bottom: 40,
    
    paddingLeft: 15,
    paddingRight: 15,
  },
  registerButton: {
    flexDirection: 'row',
    flex: 0.6,
    height: 40,
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  backgroundImage: {
    height: deviceHeight,
    width: deviceWidth
  },
  logo: {
    height: 90,
    width: 90
  },
});
