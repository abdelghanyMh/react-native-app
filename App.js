import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/OfflineNotice';
import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import cache from './app/utils/cache';
import useNotification from './app/hooks/useNotification';
import errorLogger from './app/utils/ErrorLogger';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  },
};
// init errorLogger
errorLogger.start();

const App = () => {
  errorLogger.logError(new Error('error test'));
  useNotification(); // init handle

  const [user, setUser] = useState(null);
  // TODO add App loading screen

  const restoreUser = async () => {
    const user = await cache.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={MyTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
