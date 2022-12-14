import React, {useState, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Appearance,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import {Colors} from '../../../assets/Colors';
import {Icons} from '../../../assets/Icons';
import FTextInput from '../../components/FTextInput';
import {CALLBACK_TYPE} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
import useUserStore from '../../../hooks/useUserStore';

const LoginTab = ({navigation, route}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const logos = [
    require('../../../assets/icons/catimg.png'),
    require('../../../assets/icons/catimg.png'),
    require('../../../assets/icons/catimg.png'),
    require('../../../assets/icons/catimg.png'),
    require('../../../assets/icons/catimg.png'),
    require('../../../assets/icons/catimg.png'),
  ];

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const login = useUserStore(state => state.login);

  return (
    <View style={styles.container}>
      <View style={{height: 2}} />
      {/* Username TextInput */}
      <FTextInput
        title={strings.username}
        value={username}
        onChangeText={text => {
          setUsername(text);
        }}
        hint={strings.pleaseEnterUsername}
      />
      {/* Password TextInput */}
      <FTextInput
        title={strings.password}
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        hint={strings.pleaseEnterPassword}
        buttonImageSource={Icons.common.visibility}
        onButtonClick={() => {}}
      />
      {/* Checkbox for remember username & forget password */}
      <View style={{marginTop: 8, flexDirection: 'row'}}>
        <Text>{strings.rememberUsername}</Text>
        <View style={{flex: 1}} />
        <Text style={{color: Colors.primary}}>{strings.forgotPassword}</Text>
      </View>
      <View style={{flex: 10}} />
      {/* Login Button */}
      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 16,
          borderRadius: 5,
          backgroundColor: Colors.primary,
        }}
        onPress={() => {
          login(username, password);
          // navigation.goBack();
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          {strings.login}
        </Text>
      </TouchableOpacity>
      {/* Look Around | Quick Login */}
      <View style={{margin: 16, flexDirection: 'row'}}>
        <Text style={{flex: 1, color: Colors.primary, textAlign: 'right'}}>
          {strings.lookAround}
        </Text>
        <View
          style={{marginHorizontal: 16, width: 1, backgroundColor: 'gray'}}
        />
        <Text style={{flex: 1, color: Colors.primary}}>
          {strings.quickLogin}
        </Text>
      </View>
      {/* Logos */}
      <FlatList
        data={logos}
        renderItem={({item}) => <Image style={{margin: 8}} source={item} />}
        horizontal
      />
    </View>
  );
};

export default LoginTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    username: '',
    password: '',
    pleaseEnterUsername: '',
    pleaseEnterPassword: '',
    rememberUsername: '',
    forgotPassword: '',
    login: '',
    lookAround: '',
    quickLogin: '',
  },
  th: {
    username: '',
    password: '',
    pleaseEnterUsername: '',
    pleaseEnterPassword: '',
    rememberUsername: '',
    forgotPassword: '',
    login: '',
    lookAround: '',
    quickLogin: '',
  },
  en: {
    username: '',
    password: '',
    pleaseEnterUsername: '',
    pleaseEnterPassword: '',
    rememberUsername: '',
    forgotPassword: '',
    login: '',
    lookAround: '',
    quickLogin: '',
  },
});
