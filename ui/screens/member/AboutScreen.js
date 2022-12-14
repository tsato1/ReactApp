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
        title={strings.about}
        showBack={true}
      />
      <View style={styles.featureItemList}>
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.aboutUs}
          title={strings.aboutUs}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.blog}
          title={strings.blog}
        />
        <View style={styles.divider} />
        <FeatureItem
          onClick={() => {}}
          imageSource={Icons.mCenter.managementSettings.sponsor}
          title={strings.sponsor}
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
    about: '',
    aboutUs: '',
    blog: '',
    sponsor: '',
  },
  th: {
    about: '',
    aboutUs: '',
    blog: '',
    sponsor: '',
  },
  en: {
    about: 'About',
    aboutUs: 'About Us',
    blog: 'Blog',
    sponsor: 'Sponsor',
  },
});
