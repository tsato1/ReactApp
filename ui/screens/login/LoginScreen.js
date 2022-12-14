import React, {useEffect, useState, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Appearance,
  BackHandler,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Colors} from '../../../assets/Colors';
import TopNavbar from '../../components/TopNavbar';
import LoginTab from './LoginTab';
import RegisterTab from './RegisterTab';

const renderScene = SceneMap({
  loginTab: LoginTab,
  registerTab: RegisterTab,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color:
            Appearance.getColorScheme() === 'dark'
              ? focused
                ? Colors.dark.text.main
                : Colors.dark.text.body
              : focused
              ? Colors.light.text.main
              : Colors.light.text.body,
          fontWeight: focused ? 'bold' : 'normal',
        }}>
        {route.title}
      </Text>
    )}
    indicatorStyle={{
      backgroundColor:
        Appearance.getColorScheme() === 'dark'
          ? Colors.dark.component.fills
          : Colors.light.component.fills,
      height: 40,
      width: 172,
      margin: 4,
      borderRadius: 5,
    }}
    style={{
      backgroundColor:
        Appearance.getColorScheme() === 'dark'
          ? Colors.dark.component.border
          : Colors.light.component.border,
      marginHorizontal: 16,
      borderRadius: 5,
    }}
  />
);

const LoginScreen = ({navigation, route}) => {
  const {screen} = route.params;

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'loginTab', title: strings.login},
    {key: 'registerTab', title: strings.register},
  ]);

  useEffect(() => {
    const backAction = () => {
      if (screen === undefined || screen === null) {
        navigation.goBack();
      } else {
        navigation.navigate('MainContainer', {goTo: screen}); // go back to the screen that it came from
        return true;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <TopNavbar
        navigation={navigation}
        prevScreen={screen}
        showClose={true}
        showLogo={true}
        showCustomerService={true}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{
          height: 40,
          width: layout.width,
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    login: '',
    register: '',
  },
  th: {
    login: '',
    register: '',
  },
  en: {
    login: 'Login',
    register: 'Register',
  },
});
