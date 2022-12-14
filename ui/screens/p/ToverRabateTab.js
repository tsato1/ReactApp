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
import toverRebateToday from './toverRebateToday';
import toverRebateYesterday from './toverRebateYesterday';

const renderScene = SceneMap({
  toverRebateToday: toverRebateToday,
  toverRebateYesterday: toverRebateYesterday,
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

const toverRabateScreen = () => {
  const layout = useWindowDimensions();

  const loggedIn = true;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'toverRebateToday', title: strings.today},
    {key: 'toverRebateYesterday', title: strings.yesterday},
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
      <Text>{strings.pleaseLogin}</Text>
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
    pleaseLogin: '',
    today: '今日',
    yesterday: '昨日',
  },
  th: {
    pleaseLogin: '',
    today: '今日',
    yesterday: '昨日',
  },
  en: {
    pleaseLogin: '',
    today: 'Today',
    yesterday: 'Yesterday',
  },
});

export default toverRabateScreen;
