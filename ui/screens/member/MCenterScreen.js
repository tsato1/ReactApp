import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  useColorScheme,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import LocalizedStrings from 'react-native-localization';

import {Icons} from '../../../assets/Icons';
import MCenterCommonFeatureButton from './components/MCenterCommonFeatureButton';
import FeatureItem from './components/FeatureItem';
import TopNavbar from '../../components/TopNavbar';

const MCenterScreenStack = createStackNavigator();

const MCenterScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <React.Fragment>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
          <View style={styles.commonFeature}>
            <MCenterCommonFeatureButton
              onClick={() => {}}
              imageSource={Icons.mCenter.commonFeature.specialOffer}
              text={strings.specialOffer}
              isDarkMode={isDarkMode}
            />
            <MCenterCommonFeatureButton
              onClick={() => {}}
              imageSource={Icons.mCenter.commonFeature.security}
              text={strings.security}
              isDarkMode={isDarkMode}
            />
            <MCenterCommonFeatureButton
              onClick={() => {}}
              imageSource={Icons.mCenter.commonFeature.recommend}
              text={strings.recommend}
              isDarkMode={isDarkMode}
            />
            <MCenterCommonFeatureButton
              onClick={() => {}}
              imageSource={Icons.mCenter.commonFeature.share}
              text={strings.share}
              isDarkMode={isDarkMode}
            />
          </View>
          <View style={styles.faqVerticalPager}>
            <Image source={Icons.common.footballManager} />
            <Text style={{flex: 1, paddingStart: 16}}>FAQ Vertical Pager</Text>
            <Image source={Icons.common.arrowRight} />
          </View>
        </View>

        <View style={styles.featureItemList}>
          <FeatureItem
            onClick={() => {
              navigation.navigate('ManagementSettingsScreen');
            }}
            imageSource={Icons.mCenter.featureItem.manageAccounts}
            title={strings.manageAccounts}
            message={strings.manageAccountsMessage}
          />
          <View style={styles.divider} />
          <FeatureItem
            onClick={() => {
              navigation.navigate('HelpCenterScreen');
            }}
            imageSource={Icons.mCenter.featureItem.helpCenter}
            title={strings.helpCenter}
            message={strings.helpCenterMessage}
          />
          <View style={styles.divider} />
          <FeatureItem
            onClick={() => {
              navigation.navigate('AboutScreen');
            }}
            imageSource={Icons.mCenter.featureItem.about}
            title={strings.about}
            message={strings.aboutMessage}
          />
          <View style={styles.divider} />
          <FeatureItem
            onClick={() => {
              navigation.navigate('SystemSettingsScreen');
            }}
            imageSource={Icons.mCenter.featureItem.systemSettings}
            title={strings.systemSettings}
            message={strings.systemSettingsMessage}
          />
          <View style={styles.divider} />
          <FeatureItem
            onClick={() => {
              navigation.navigate('VersionInfoScreen');
            }}
            imageSource={Icons.mCenter.featureItem.version}
            title={strings.version}
            message={'0.1.0(2.9)'}
          />
        </View>
        <Text style={{fontSize: 10}}>{strings.tip}</Text>
      </ScrollView>
    </React.Fragment>
  );
};

export default MCenterScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonFeature: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginHorizonal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  faqVerticalPager: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginHorizonal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: 'white',
  },
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
    specialOffer: '',
    security: '',
    recommend: '',
    share: '',
    manageAccounts: '',
    manageAccountsMessage: '',
    helpCenter: '',
    helpCenterMessage: '',
    about: '',
    aboutMessage: '',
    systemSettings: '',
    systemSettingsMessage: '',
    version: '',
    tip: '',
  },
  th: {
    specialOffer: '',
    security: '',
    recommend: '',
    share: '',
    manageAccounts: '',
    manageAccountsMessage: '',
    helpCenter: '',
    helpCenterMessage: '',
    about: '',
    aboutMessage: '',
    systemSettings: '',
    systemSettingsMessage: '',
    version: '',
    tip: '',
  },
  en: {
    specialOffer: '',
    security: '',
    recommend: '',
    share: '',
    manageAccounts: '',
    manageAccountsMessage: '',
    helpCenter: '',
    helpCenterMessage: '',
    about: '',
    aboutMessage: '',
    systemSettings: '',
    systemSettingsMessage: '',
    version: '',
    tip: '',
  },
});
