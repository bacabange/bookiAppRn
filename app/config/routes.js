import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
// import { createBottomTabNavigator } from 'react-navigation';
import { AuthScreen } from '../screens/AuthScreen';
import { Splash } from '../screens/Splash';
import HomeScreen from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';

// Init theme
EStyleSheet.build({
  $primary: '#ef476f',
  $white: '#ffffff',
  $white7: '#f7f7f7',
  $yellow: '#ffd166',
  $green: '#06d6a0',
  $blue: '#118ab2',
  $black: '#333333',
  $gray: '#666666',
  $white2: '#d3d3d3',

  // Debug UI
  // $outline: 1,
});

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator(
  { Auth: { screen: AuthScreen, navigationOptions: { header: null } }, Login: LoginScreen },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: EStyleSheet.value('$primary'),
      },
      headerTintColor: EStyleSheet.value('$white'),
    },
  },
);

export default createSwitchNavigator(
  {
    Splash,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);
