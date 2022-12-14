import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Appearance,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import {Icons} from '../../../assets/Icons';
import FTextInput from '../../components/FTextInput';
import TopNavbar from '../../components/TopNavbar';

const PersonalInfoScreen = ({navigation}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const [realNameText, onRealNameChangeText] = useState('');
  const [idNumberText, onIdNumberChangeText] = useState('');
  const [birthdayText, onBirthdayChangeText] = useState('');

  return (
    <React.Fragment>
      <TopNavbar
        navigation={navigation}
        title={strings.title}
        showBack={true}
      />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={
              (styles.card,
              {
                backgroundColor: isDarkMode
                  ? Colors.dark.component.surface1
                  : Colors.light.component.surface1,
              })
            }>
            <FTextInput
              title={strings.realName}
              onChangeText={onRealNameChangeText}
              hint={strings.realNameHint}
              keyboardType={'numeric'}
            />
            <View style={{height: 8}}></View>
            <FTextInput
              title={strings.idNumber}
              onChangeText={onIdNumberChangeText}
              hint={strings.idNumberHint}
              keyboardType={'numeric'}
            />
            <View style={styles.spacer}></View>
            <FTextInput
              title={strings.birthday}
              hasPhoneNumber={true}
              onChangeText={onBirthdayChangeText}
              hint={strings.birthdayHint}
              description={strings.birthdayDescription}
              keyboardType={'numeric'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 16,
  },
  spacer: {
    height: 4,
  },
  card: {
    paddingTop: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    title: '',
    username: '',
    usernameHint: '',
    usernameDescription: '',
    password: '',
    passwordHint: '',
    passwordDescription: '',
    phoneNumber: '',
    realName: '',
    realNameHint: '',
    realNameDescription: '',
    idNumber: '',
    idNumberHint: '',
    birthday: '',
    birthdayHing: '',
    birthdayDescription: '',
  },
  th: {
    title: '',
    username: '',
    usernameHint: '',
    usernameDescription: '',
    password: '',
    passwordHint: '',
    passwordDescription: '',
    phoneNumber: '',
    realName: '',
    realNameHint: '',
    realNameDescription: '',
    idNumber: '',
    idNumberHint: '',
    birthday: '',
    birthdayHing: '',
    birthdayDescription: '',
  },
  en: {
    title: '',
    username: '',
    usernameHint: '',
    usernameDescription: '',
    password: '',
    passwordHint: '',
    passwordDescription: '',
    phoneNumber: '',
    realName: '',
    realNameHint: '',
    realNameDescription: '',
    idNumber: '',
    idNumberHint: '',
    birthday: '',
    birthdayHing: '',
    birthdayDescription: '',
  },
});

export default PersonalInfoScreen;
