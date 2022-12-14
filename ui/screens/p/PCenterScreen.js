import React, {useState, useEffect, useContext} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  useWindowDimensions,
  Appearance,
} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LocalizedStrings from 'react-native-localization';

import {Colors} from '../../../assets/Colors';
import LoginButton from '../../components/LoginButton';
import PROActivitiesTab from './PROActivitiesTab';
import BonusesTab from './BonusesTab';
import toverRabateTab from './toverRabateTab';
import useUserStore from '../../../hooks/useUserStore';

const renderScene = SceneMap({
  PROActivitiesTab: PROActivitiesTab,
  bonusesTab: BonusesTab,
  toverRabateTab: toverRabateTab,
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
        }}>
        {route.title}
      </Text>
    )}
    indicatorStyle={{backgroundColor: Colors.primary}}
    style={{
      backgroundColor:
        Appearance.getColorScheme() === 'dark'
          ? Colors.dark.backgroundColor
          : Colors.light.backgroundColor,
      marginHorizontal: 16,
    }}
  />
);

const PROCenterScreen = ({navigation, route}) => {
  const layout = useWindowDimensions();

  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'PROActivitiesTab', title: strings.PROActivities},
    {key: 'bonusesTab', title: strings.bonus},
    {key: 'toverRabateTab', title: strings.toverRebate},
  ]);

  return (
    <React.Fragment>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{
          height: 40,
          width: layout.width,
        }}
        swipeEnabled={false}
      />
      {!isLoggedIn && (
        <LoginButton navigation={navigation} screen={strings.PROCenter} />
      )}
    </React.Fragment>
  );
};

let strings = new LocalizedStrings({
  'zh-cn': {
    PROCenter: '',
    PROActivities: '',
    bonus: '',
    toverRebate: '',
  },
  th: {
    PROCenter: '',
    PROActivities: '',
    bonus: '',
    toverRebate: '',
  },
  en: {
    PROCenter: '',
    PROActivities: '',
    bonus: '',
    toverRebate: '',
  },
});

export default PROCenterScreen;
