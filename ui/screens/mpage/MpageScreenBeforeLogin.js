import React, {useState, useEffect} from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginButton from '../../components/LoginButton';
import CountdownTimer from './components/CountDownTimer';
import {MPageTutorialSlides} from '../../../assets/TutorialSlides';
import {Images} from '../../../assets/Images';

const BeforeLoginMPageScreen = ({navigation}) => {
  const width = Dimensions.get('window').width - 32; // each horizontal margin is 16
  const height = Dimensions.get('window').height;

  const [hasEvent, setHasEvent] = useState(false);

  /* CountDownTimer */
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetDate = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {hasEvent && <CountdownTimer targetDate={targetDate} />}
        {height < 884 ? (
          <Image
            source={Images.MPage.blurredMPageScreen}
            style={{
              width: width,
              resizeMode: 'contain',
            }}
          />
        ) : (
          <Image
            source={Images.MPage.blurredMPageScreenBig}
            style={{
              width: width,
              resizeMode: 'contain',
            }}
          />
        )}
      </ScrollView>
      <Text
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 80,
          fontWeight: 'bold',
        }}>
        {strings.loginToSeeMoreContent}
      </Text>
      <LoginButton navigation={navigation} screen={strings.MPage} />
    </SafeAreaView>
  );
};

export default BeforeLoginMPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    MPage: '',
    loginToSeeMoreContent: '',
  },
  th: {
    MPage: '',
    loginToSeeMoreContent: '',
  },
  en: {
    MPage: '',
    loginToSeeMoreContent: '',
  },
});
