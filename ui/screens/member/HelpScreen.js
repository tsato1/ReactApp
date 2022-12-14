import React from 'react';

import {View, StyleSheet} from 'react-native';

import LocalizedStrings from 'react-native-localization';
import TopNavbar from '../../components/TopNavbar';
import FeatureItem from './components/FeatureItem';
import {Icons} from '../../../assets/Icons';

const HelpScreen = ({navigation}) => {
  return (
    <React.Fragment>
      <TopNavbar
        navigation={navigation}
        title={strings.helpScreen}
        showBack={true}
      />
      <View style={styles.featureItemList}>
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.pollingCenter}
          title={strings.pollingCenter}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.faq}
          title={strings.faq}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.tutorialCenter}
          title={strings.tutorialCenter}
        />
      </View>
    </React.Fragment>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  featureItemList: {
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  divider: {
    alignSelf: 'center',
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    helpScreen: '',
    pollingCenter: '',
    faq: '',
    tutorialCenter: '',
  },
  th: {
    helpScreen: '',
    pollingCenter: '',
    faq: '',
    tutorialCenter: '',
  },
  en: {
    helpScreen: 'Help Screen',
    pollingCenter: 'Polling Center',
    faq: 'FAQ',
    tutorialCenter: 'Tutorial Center',
  },
});
