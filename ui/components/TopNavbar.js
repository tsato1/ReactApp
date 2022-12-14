import React, {useContext} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import {Icons} from '../../assets/Icons';
import {Colors} from '../../assets/Colors';

import MSettingsScreen from '../screens/mpage/MSettingsScreen';
import PInfoScreen from '../screens/m/PInfoScreen';
import useUserStore from '../../hooks/useUserStore';

const TopNavbar = React.memo(
  ({
    navigation,
    prevScreen,
    showLogo,
    title,
    showBack,
    showClose,
    showMPageSettings,
    showFavoriteMenu,
    showEditPInfo,
    showNotification,
    showCustomerService,
  }) => {
    const isLoggedIn = useUserStore(state => state.isLoggedIn);

    return (
      <SafeAreaView>
        <View style={styles.navbar}>
          {showBack && (
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => {
                if (prevScreen === null || prevScreen === undefined) {
                  navigation.goBack();
                } else {
                  navigation.navigate('MainContainer', {goTo: prevScreen});
                }
              }}>
              <Image source={Icons.common.arrowLeft} />
            </TouchableOpacity>
          )}
          {showClose && (
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => {
                if (prevScreen === null || prevScreen === undefined) {
                  navigation.goBack();
                } else {
                  navigation.navigate('MainContainer', {goTo: prevScreen});
                }
              }}>
              <Image source={Icons.common.close} />
            </TouchableOpacity>
          )}
          {showMPageSettings && (
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => {
                navigation.navigate('MSettingsScreen');
              }}>
              <Image source={Icons.common.mSettings} />
            </TouchableOpacity>
          )}
          {showFavoriteMenu && (
            <TouchableOpacity style={{position: 'absolute', left: 0}}>
              <Image source={Icons.common.favoriteMenu} />
            </TouchableOpacity>
          )}
          {showEditPInfo && (
            <TouchableOpacity
              style={{position: 'absolute', left: 0, flexDirection: 'row'}}
              onPress={() => {
                if (isLoggedIn) {
                  navigation.navigate('PInfoScreen');
                } else {
                  navigation.navigate('LoginScreen', {
                    screen: strings.mCenter,
                  });
                }
              }}>
              <Text style={{fontSize: 16, color: Colors.primary}}>
                {strings.loginOrRegister}
              </Text>
              <Image
                tintColor={Colors.primary}
                source={Icons.common.arrowRight}
              />
            </TouchableOpacity>
          )}
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
            }}>
            {showLogo && (
              <Image
                style={{
                  left: 0,
                  right: 0,
                }}
                source={Icons.common.Logo}
              />
            )}
            {title && (
              <Text
                style={{
                  justifyContent: 'center',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                {title}
              </Text>
            )}
          </View>
          {showNotification && (
            <TouchableOpacity
              style={{position: 'absolute', right: 0, marginEnd: 50}}>
              <Image style={styles.icon} source={Icons.common.notification} />
            </TouchableOpacity>
          )}
          {showCustomerService && (
            <TouchableOpacity style={{position: 'absolute', right: 0}}>
              <Image
                style={styles.icon}
                source={Icons.common.customerService}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  navbar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    margin: 16,
  },
  icon: {
    marginStart: 15,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    mPage: 'm',
    gCenter: 'g',
    bCenter: 'b',
    pCenter: 'p',
    mCenter: 'm',

    loginOrRegister: 'a',
  },
  th: {
    mPage: 'm',
    gCenter: 'g',
    bCenter: 'b',
    pCenter: 'p',
    mCenter: 'm',

    loginOrRegister: 'a',
  },
  en: {
    mPage: 'MPage',
    gCenter: 'GCenter',
    bCenter: 'BCenter',
    pCenter: 'PCenter',
    mCenter: 'MCenter',

    loginOrRegister: 'Login/Register',
  },
});

export default TopNavbar;
