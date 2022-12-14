import React, {useState} from 'react';

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import FTextInput from '../../components/FTextInput';
import {Icons} from '../../../assets/Icons';
import {Colors} from '../../../assets/Colors';

const RegisterTab = ({navigation, route}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const [usernameText, onUsernameChangeText] = useState('');
  const [passwordText, onPasswordChangeText] = useState('');
  const [phoneNumberText, onPhoneNumberChangeText] = useState('');
  const [realNameText, onRealNameChangeText] = useState('');
  const [idNumberText, onIdNumberChangeText] = useState('');
  const [birthdayText, onBirthdayChangeText] = useState('');
  const [affiliateCodeText, onAffiliateCodeChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}>
          <FTextInput
            title={strings.username}
            onChangeText={onUsernameChangeText}
            hint={strings.usernameHint}
            description={strings.usernameDescription}
            keyboardType={'numeric'}
          />
          <View style={styles.spacer}></View>
          <FTextInput
            title={strings.password}
            onChangeText={onPasswordChangeText}
            hint={strings.passwordHint}
            description={strings.passwordDescription}
            buttonImageSource={Icons.common.visibility}
            onButtonClick={() => {}}
            keyboardType={'numeric'}
          />
          <View style={styles.spacer}></View>
          <FTextInput
            title={strings.phoneNumber}
            hasPhoneNumber={true}
            onChangeText={onPhoneNumberChangeText}
            hint={strings.idNumberHint}
            keyboardType={'numeric'}
          />
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}>
          <FTextInput
            title={strings.realName}
            onChangeText={onRealNameChangeText}
            hint={strings.realNameHint}
            description={strings.realNameDescription}
            keyboardType={'numeric'}
          />
          <View style={styles.spacer}></View>
          {/* todo: checkbox here */}
          <View style={styles.spacer}></View>
          <FTextInput
            title={strings.idNumber}
            onChangeText={onIdNumberChangeText}
            hint={strings.idNumberHint}
            keyboardType={'numeric'}
          />
          <View style={styles.spacer}></View>
          <FTextInput
            title={strings.birthday}
            onChangeText={onBirthdayChangeText}
            hint={strings.birthdayHint}
            description={strings.birthdayDescription}
            buttonImageSource={Icons.common.calendar}
            onButtonClick={() => {}}
            keyboardType={'numeric'}
          />
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}>
          <FTextInput
            title={strings.affiliateCode}
            onChangeText={onRealNameChangeText}
            hint={strings.affiliateCodeHint}
            description={strings.affiliateCodeDescription}
            keyboardType={'numeric'}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 4,
          }}>
          <Text>{strings.readTerms}</Text>
          <View style={{width: 8}} />
          <Text style={{color: Colors.primary}}>
            {strings.termAndConditions}
          </Text>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            {strings.submit}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginTop: 16,
    padding: 16,
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
    birthdayHint: '',
    birthdayDescription: '',
    affiliateCode: '',
    affiliateCodeHint: '',
    affiliateCodeDescription: '',
    readTerms: '',
    termAndConditions: '',
    submit: '',
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
    birthdayHint: '',
    birthdayDescription: '',
    affiliateCode: '',
    affiliateCodeHint: '',
    affiliateCodeDescription: '',
    readTerms: '',
    termAndConditions: '',
    submit: '',
  },
  en: {
    title: '',
    username: 'Username',
    usernameHint: 'Please enter your username',
    usernameDescription: '6-14 alphabets or numbers',
    password: 'Password',
    passwordHint: 'Please enter your password',
    passwordDescription: '',
    phoneNumber: 'Phone Number',
    realName: 'Real Name',
    realNameHint: 'Please enter your name',
    realNameDescription: '',
    idNumber: 'ID Number',
    idNumberHint: 'Please enter your ID',
    birthday: 'Birthday',
    birthdayHint: 'Please fill in your birthday',
    birthdayDescription: 'Please fill in your real birthday',
    affiliateCode: 'Affiliate Code',
    affiliateCodeHint: 'Please enter Affilate Code',
    affiliateCodeDescription: 'Please enter Affiliate Code',
    readTerms: 'Read',
    termAndConditions: 'Terms and Conditions',
    submit: 'Submit',
  },
});
