import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Appearance,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LocalizedStrings from 'react-native-localization';
import {Icons} from '../../../assets/Icons';
import {Colors} from '../../../assets/Colors';
import BonusesTabInProgress from './BonusesTabInProgress';
import BonusesTabClaimable from './BonusesTabClaimable';
import BonusesTabPast from './BonusesTabPast';

const renderScene = SceneMap({
  inProgress: BonusesTabInProgress,
  claimable: BonusesTabClaimable,
  past: BonusesTabPast,
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
    indicatorStyle={{
      backgroundColor:
        Appearance.getColorScheme() === 'dark'
          ? Colors.dark.component.fills
          : Colors.light.component.fills,
      height: 40,
      width: 112,
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

const BonusesScreen = () => {
  const layout = useWindowDimensions();

  const loggedIn = true;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'inProgress', title: strings.inProgress},
    {key: 'claimable', title: strings.claimable},
    {key: 'past', title: strings.past},
  ]);

  return loggedIn ? (
    <View style={{flex: 1, marginTop: 12}}>
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
  ) : (
    <View style={styles.container}>
      <Image style={{marginBottom: 12}} source={Icons.PROCenter.ticket} />
      <Text>{strings.pleaseLoginBeforeCheckingBonuses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    pleaseLoginBeforeCheckingBonuses: '',
    inProgress: '',
    claimable: '',
    past: '',
  },
  th: {
    pleaseLoginBeforeCheckingBonuses: '',
    inProgress: '',
    claimable: '',
    past: '',
  },
  en: {
    pleaseLoginBeforeCheckingBonuses: '',
    inProgress: '',
    claimable: '',
    past: '',
  },
});

export default BonusesScreen;
