import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import OfflineNotice from './app/components/OfflineNotice';
import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  },
};
const App = () => {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
