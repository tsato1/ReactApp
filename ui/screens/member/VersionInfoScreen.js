import React from 'react';

import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Appearance,
  TouchableOpacity,
} from 'react-native';

import LocalizedStrings from 'react-native-localization';
import TopNavbar from '../../components/TopNavbar';
import {Icons} from '../../../assets/Icons';
import {Colors} from '../../../assets/Colors';

const VersionInfoScreen = ({navigation}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <React.Fragment>
      <TopNavbar
        navigation={navigation}
        title={strings.versionInfoScreen}
        showBack={true}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{strings.latestVersion}</Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.mCenter.managementSettings.iconWithBg} />
            <Text style={{marginStart: 8}}>{strings.HardbackEdition}</Text>
            <View style={{flex: 1}} />
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.primary,
                borderRadius: 5,
                height: 24,
                width: 36,
              }}>
              <Text style={{color: 'white', fontSize: 12}}>
                {strings.update}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <Text style={{fontWeight: 'bold'}}>1.75.01</Text>
            <View style={{flex: 1}} />
            <Text>2022/03/02</Text>
          </View>
          <Text>1. fix placeholder</Text>
          <Text>2. fix placeholder</Text>
        </View>
        <Text style={styles.title}>{strings.currentVersion}</Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}></View>
        <Text style={styles.title}>{strings.currentVersion}</Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}></View>
      </ScrollView>
    </React.Fragment>
  );
};

export default VersionInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  divider: {
    alignSelf: 'center',
    width: '100%',
    height: 1,
    marginVertical: 12,
    backgroundColor: 'gray',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    versionInfoScreen: '',
    latestVersion: '',
    currentVersion: '',
    updateHistory: '',
    HardbackEdition: '',
    update: '',
  },
  th: {
    versionInfoScreen: '',
    latestVersion: '',
    currentVersion: '',
    updateHistory: '',
    HardbackEdition: '',
    update: '',
  },
  en: {
    versionInfoScreen: '',
    latestVersion: '',
    currentVersion: '',
    updateHistory: '',
    HardbackEdition: '',
    update: '',
  },
});
