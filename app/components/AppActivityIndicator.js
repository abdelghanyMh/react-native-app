import Lottie from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

const AppActivityIndicator = ({visible = false}) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <Lottie
        source={require('../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    elevation: Platform.OS === 'android' ? 1 : 0,
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    opacity: 0.8,
    width: '100%',
    zIndex: 1,
  },
});
