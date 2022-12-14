import React, {useCallback, useEffect, useRef, useContext} from 'react';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  StackRouter,
} from '@react-navigation/native';
import {View, PanResponder} from 'react-native';
import useUserStore from '../hooks/useUserStore';

const FNavigator = ({initialRouteName, children, screenOptions}) => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const {state, navigation, descriptors} = useNavigationBuilder(StackRouter, {
    children,
    screenOptions,
    initialRouteName,
  });
  const timerId = useRef(false);

  useEffect(() => {
    resetInactivityTimeout();
  }, [resetInactivityTimeout]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        resetInactivityTimeout();
      },
    }),
  ).current;

  const resetInactivityTimeout = useCallback(() => {
    if (isLoggedIn) {
      clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        console.log('time out !!!');
      }, 5000);
    }
  }, []);

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View
        style={{flex: 1}}
        onTouchEnd={() => {
          //   console.log('On Touch End');
          resetInactivityTimeout();
        }}
        onStartShouldSetResponder={() => {
          //   console.log('You click by View');
        }}>
        {descriptors[state.routes[state.index].key].render()}
      </View>
    </NavigationHelpersContext.Provider>
  );
};

export default FNavigator;
