import React from 'react';

import {View, StyleSheet} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import TopNavbar from '../../components/TopNavbar';
import FeatureItem from './components/FeatureItem';
import {Icons} from '../../../assets/Icons';

const ManagementSettingsScreen = ({navigation}) => {
  return (
    <React.Fragment>
      <TopNavbar
        navigation={navigation}
        title={strings.managementSettingsScreen}
        showBack={true}
      />
      <View style={styles.featureItemList}>
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.managePassword}
          title={strings.managePassword}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.createSecurityCode}
          title={strings.createSecurityCode}
        />
      </View>
    </React.Fragment>
  );
};

export default ManagementSettingsScreen;

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
    managementSettingsScreen: '',
    managePassword: '',
    createSecurityCode: '',
  },
  th: {
    managementSettingsScreen: '',
    managePassword: '',
    createSecurityCode: '',
  },
  en: {
    managementSettingsScreen: 'Management Settings Screen',
    managePassword: 'Manage Password',
    createSecurityCode: 'Create Security Code',
  },
});
