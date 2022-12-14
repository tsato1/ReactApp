import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import LocalizedStrings from 'react-native-localization';

import TopNavbar from '../../components/TopNavbar';

const MPageSettingsScreen = ({navigation}) => {
  return (
    <React.Fragment>
      <TopNavbar
        navigation={navigation}
        title={strings.title}
        showBack={true}
      />
      <SafeAreaView>
        <Text>MPage Settings Screen</Text>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default MPageSettingsScreen;

let strings = new LocalizedStrings({
  'zh-cn': {
    title: '设定',
  },
  th: {
    title: '设定',
  },
  en: {
    title: 'Settings',
  },
});
