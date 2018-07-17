import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
// Auth Screens
import { AuthScreen } from '../screens/AuthScreen';
import { Splash } from '../screens/Splash';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
// App screens
// import HomeScreen from '../screens/HomeScreen';
import { MyBooksScreen } from '../screens/MyBooksScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { AccountScreen } from '../screens/AccountScreen';
import lang from '../i18n';

// Init theme
EStyleSheet.build({
  $primary: '#ef476f',
  $primaryDark: '#d8416c',
  $white: '#ffffff',
  $white7: '#f7f7f7',
  $yellow: '#ffd166',
  $green: '#06d6a0',
  $blue: '#118ab2',
  $black: '#333333',
  $gray: '#666666',
  $gray2: '#999999',
  $gray3: '#808080',
  $white2: '#d3d3d3',
  $white3: '#e6e6e6',

  // Debug UI
  // $outline: 1,
});

const TabStack = createBottomTabNavigator(
  {
    MyBooks: {
      screen: MyBooksScreen,
      navigationOptions: {
        title: lang('my_books'),
        tabBarIcon: ({ tintColor }) => <Icon name="bookmark-o" size={18} color={tintColor} />,
      },
    },

    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        title: lang('notifications'),
        tabBarIcon: ({ tintColor }) => <Icon name="bell-o" size={18} color={tintColor} />,
      },
    },

    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: lang('account'),
        tabBarIcon: ({ tintColor }) => <Icon name="user-o" size={18} color={tintColor} />,
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        <Icon name="user" size={18} color={tintColor} />
      ),
      header: { visible: true },
    }),
    tabBarOptions: {
      activeTintColor: EStyleSheet.value('$primary'),
      inactiveTintColor: EStyleSheet.value('$gray'),
    },
  },
);

const AppStack = createStackNavigator(
  {
    MyTab: {
      screen: TabStack,
      navigationOptions: { title: 'Booki' },
    },
  },
  {
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: EStyleSheet.value('$primary'),
      },
      headerTintColor: EStyleSheet.value('$white'),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Auth: { screen: AuthScreen, navigationOptions: { header: null } },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: lang('login'),
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerTitle: lang('register'),
      },
    },
  },
  {
    initialRouteName: 'Auth',
    navigationOptions: {
      headerStyle: {
        backgroundColor: EStyleSheet.value('$primary'),
      },
      headerTintColor: EStyleSheet.value('$white'),
    },
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
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
    initialRouteName: 'App',
  },
);
