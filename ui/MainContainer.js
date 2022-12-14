import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Appearance,
  ActivityIndicator,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizedStrings from 'react-native-localization';
import {Icons} from '../assets/Icons';
import {Colors} from '../assets/Colors';
import {
  MpageTutorialSlides,
  GTutorialSlides,
  BTutorialSlides,
  PTutorialSlides,
  MTutorialSlides,
} from '../assets/TutorialSlides';
import {
  MpageNavigator,
  GCenterNavigator,
  BCenterNavigator,
  PCenterNavigator,
  MCenterNavigator,
} from './SubContainer';
import useUserStore from '../hooks/useUserStore';

const BottomTab = createBottomTabNavigator();

export default MainContainer = ({navigation, route}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  useEffect(() => {
    const screenName = route.params?.goTo;
    if (screenName !== null && screenName !== undefined) {
      navigation.navigate(screenName);
    }
  }, [navigation]);

  function BottomTabBar({state, descriptors, navigation}) {
    return (
      <SafeAreaView style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({
                name: route.name,
                merge: true,
              });
            }
          };

          let iconName;
          if (route.name === strings.MPage) {
            iconName = isFocused
              ? Icons.bottomBar.mPageActive
              : Icons.bottomBar.mPageInactive;
          } else if (route.name === strings.gCenter) {
            iconName = isFocused
              ? Icons.bottomBar.gActive
              : Icons.bottomBar.gInactive;
          } else if (route.name === strings.bCenter) {
            iconName = isFocused
              ? Icons.bottomBar.bActive
              : Icons.bottomBar.bInactive;
          } else if (route.name === strings.pCenter) {
            iconName = isFocused
              ? Icons.bottomBar.pActive
              : Icons.bottomBar.pInactive;
          } else if (route.name === strings.mCenter) {
            iconName = isFocused
              ? Icons.bottomBar.mActive
              : Icons.bottomBar.mInactive;
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                backgroundColor: 'white',
              }}>
              {route.name === strings.bCenter ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#EFF3EF',
                  }}>
                  <Image style={{zIndex: 10}} source={iconName} />
                </View>
              ) : (
                <Image source={iconName} />
              )}
              {route.name !== strings.bCenter && (
                <Text
                  style={{
                    color: isFocused
                      ? Colors.primary
                      : isDarkMode
                      ? Colors.dark.component.icon
                      : Colors.light.component.icon,
                  }}>
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    );
  }

  const isLoading = useUserStore(state => state.isLoading);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <BottomTab.Navigator
      initialRouteName={string.gCenter}
      tabBar={props => <BottomTabBar {...props} />}
      backBehavior={'none'}>
      <BottomTab.Screen
        name={strings.mPage}
        component={MpageNavigator}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name={strings.gCenter}
        component={GCenterNavigator}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name={strings.bCenter}
        component={BCenterNavigator}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name={strings.pCenter}
        component={PROCenterNavigator}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name={strings.mCenter}
        component={MCenterNavigator}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

let strings = new LocalizedStrings({
  'zh-cn': {
    mPage: '',
    gCenter: '',
    bCenter: '',
    pCenter: '',
    mCenter: '',
  },
  th: {
    mPage: '',
    gCenter: '',
    bCenter: '',
    pCenter: '',
    mCenter: '',
  },
  en: {
    mPage: '',
    gCenter: '',
    bCenter: '',
    pCenter: '',
    mCenter: '',
  },
});
