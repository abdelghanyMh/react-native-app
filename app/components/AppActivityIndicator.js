import Lottie from 'lottie-react-native';
import {StyleSheet} from 'react-native';

const AppActivityIndicator = ({visible = false}) => {
  if (!visible) return null;
  return (
    <Lottie
      source={require('../assets/animations/loader.json')}
      autoPlay
      loop
    />
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({});
