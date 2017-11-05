import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export const landingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    bottom: 120,
    marginBottom: 24,
    marginLeft: 16,
    marginRight: 16
  },
  registerButton: {
    bottom: 120,
    marginLeft: 16,
    marginRight: 16
  },
  backgroundImage: {
    height: deviceHeight,
    width: deviceWidth,
  },
  logo: {
    height: 90,
    width: 90,
  },
});

export default landingStyles
