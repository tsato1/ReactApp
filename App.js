/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {StatusBar, View, ActivityIndicator} from 'react-native';

import {withRepeat} from 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useUserStore from './hooks/useUserStore';
import usePROStore from './hooks/usePROStore';

import MainContainer from './ui/MainContainer';
import SplashScreen from './ui/screens/SplashScreen';
import {Colors} from './assets/Colors';
import {Icons} from './assets/Icons';

import Tutorial from './ui/screens/tutorial/Tutorial';
import MPageSettingsScreen from './ui/screens/MPage/MPageSettingsScreen';
import PersonalInfoScreen from './ui/screens/member/PersonalInfoScreen';
import ManagementSettingsScreen from './ui/screens/member/ManagementSettingsScreen';
import HelpCenterScreen from './ui/screens/member/HelpCenterScreen';
import AboutScreen from './ui/screens/member/AboutScreen';
import SystemSettingsScreen from './ui/screens/member/SystemSettingsScreen';
import VersionInfoScreen from './ui/screens/member/VersionInfoScreen';
import LoginScreen from './ui/screens/login/LoginScreen';
import OfflineDialog from './ui/components/Dialogs/OfflineDialog';
import FNavigator from './ui/FNavigator';

const Stack = createStackNavigator();

// const PROCategories = usePROStore(
//   state => state.PROCategories,
// );
// const getPROCategories = usePROStore(
//   state => state.getPROCategories,
// );
// const getPROs = usePROStore(state => state.getPROs);
// const preparation = async () => {
//   await getPROCategories();
//   PROCategories.forEach(item => {
//     getPROs(item.categoryName);
//   });
// };
function fetchData() {
  return new Promise(res => setTimeout(res, 4000));
}

const App: () => Node = () => {
  const [viewedSplash, setViewedSplash] = useState(null);

  const checkSplash = async () => {
    try {
      console.log('@App checkSplash() before fetchData');
      setViewedSplash(false);
      const value = await fetchData();
      console.log('@App checkSplash() after fetchData');
      setViewedSplash(true);
    } catch (err) {
      console.log('Error @checkSplash: ', err);
    }
  };

  useEffect(() => {
    checkSplash();
  }, []);

  return viewedSplash != null ? (
    <NavigationContainer>
      <OfflineDialog />
      <FNavigator screenOptions={() => ({headerShown: false})}>
        {!viewedSplash && (
          <Stack.Screen name="Splash" component={SplashScreen} />
        )}
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="MPageSettingsScreen"
          component={MPageSettingsScreen}
        />
        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          name="ManagementSettingsScreen"
          component={ManagementSettingsScreen}
        />
        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen
          name="SystemSettingsScreen"
          component={SystemSettingsScreen}
        />
        <Stack.Screen name="VersionInfoScreen" component={VersionInfoScreen} />
      </FNavigator>
    </NavigationContainer>
  ) : (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default App;
