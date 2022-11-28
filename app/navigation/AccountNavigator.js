import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen, MessagesScreen} from '../screens';
import Routes from './Routes';
const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Account} component={AccountScreen} />
      <Stack.Screen name={Routes.Messages} component={MessagesScreen} />
    </Stack.Navigator>
  );
}
