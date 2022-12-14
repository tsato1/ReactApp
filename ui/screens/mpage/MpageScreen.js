import React, {useState, useEffect, useContext} from 'react';

import {
  Appearance,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';

import LocalizedStrings from 'react-native-localization';

import useUserStore from '../../../hooks/useUserStore';
import {Colors} from '../../../assets/Colors';
import {useCountdown} from '../../../hooks/useCountdown';
import CountdownTimer from './components/CountDownTimer';
import MyWalletCard from './components/MyWalletCard';
import LoginButton from '../../components/LoginButton';

import slides from '../../../assets/BannerSlides'; // this is tmp

const MPageScreen = ({navigation}) => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  console.log('color mode = ' + Appearance.getColorScheme());

  /* CountDownTimer */
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetDate = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.dark.component.background
            : Colors.light.component.background,
        },
      ]}>
      <ScrollView>
        {/* <StatusBar
        backgroundColor={
          isDarkMode
            ? Colors.dark.component.background
            : Colors.light.component.background
        }
      /> */}

        <CountdownTimer targetDate={targetDate} />
        <View style={styles.myWalletContainer}>
          <Text style={{paddingBottom: 12, fontWeight: 'bold'}}>
            {strings.myWallet}
          </Text>
          <MyWalletCard isDarkMode={isDarkMode} />
        </View>
        <View style={styles.miniGContainer}>
          <Text style={{paddingBottom: 12, fontWeight: 'bold'}}>
            {strings.miniG}
          </Text>
          <Banner bannerItems={slides} />
        </View>
        <View style={styles.recommendedMatchesContainer}>
          <Text style={{paddingBottom: 12, fontWeight: 'bold'}}>
            {strings.recommendedMatches}
          </Text>
          <Banner bannerItems={slides} />
        </View>
      </ScrollView>
      {!isLoggedIn && (
        <LoginButton navigation={navigation} screen={strings.MPage} />
      )}
    </SafeAreaView>
  );
};

export default MPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  myWalletContainer: {
    paddingTop: 16,
  },
  miniGContainer: {
    paddingTop: 16,
  },
  recommendedMatchesContainer: {
    paddingTop: 16,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    mPage: '',
    miniG: '',
    myWallet: '',
    instantMessage: '',
    recommendedMatches: '',
    matcheResultsAndProgresses: '',
    checkRecommendedMatches: '',
  },
  th: {
    mPage: '',
    miniG: '',
    myWallet: '',
    instantMessage: '',
    recommendedMatches: '',
    matcheResultsAndProgresses: '',
    checkRecommendedMatches: '',
  },
  en: {
    mPage: '',
    miniG: '',
    myWallet: '',
    instantMessage: '',
    recommendedMatches: '',
    matcheResultsAndProgresses: '',
    checkRecommendedMatches: '',
  },
});
