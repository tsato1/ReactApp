import React from 'react';

import {View, StyleSheet} from 'react-native';

import LocalizedStrings from 'react-native-localization';
import TopNavbar from '../../components/TopNavbar';
import FeatureItem from './components/FeatureItem';
import {Icons} from '../../../assets/Icons';

const SystemSettingsScreen = ({navigation}) => {
  return (
    <React.Fragment>
      <TopNavbar
        navigation={navigation}
        title={strings.systemSettingsScreen}
        showBack={true}
      />
      <View style={styles.featureItemList}>
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.appearanceSettings}
          title={strings.appearanceSettings}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.mainSettings}
          title={strings.mainSettings}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.quickLogin}
          title={strings.quickLogin}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.deviceInfo}
          title={strings.deviceInfo}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.clearCache}
          title={strings.clearCache}
          info={'123MB'}
        />
      </View>
    </React.Fragment>
  );
};

export default SystemSettingsScreen;

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
    systemSettingsScreen: '',
    appearanceSettings: '',
    mainSettings: '',
    quickLogin: '',
    deviceInfo: '',
    clearCache: '',
  },
  th: {
    systemSettingsScreen: '',
    appearanceSettings: '',
    mainSettings: '',
    quickLogin: '',
    deviceInfo: '',
    clearCache: '',
  },
  en: {
    systemSettingsScreen: '',
    appearanceSettings: '',
    mainSettings: '',
    quickLogin: '',
    deviceInfo: '',
    clearCache: '',
  },
});
