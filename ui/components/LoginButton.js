import React from 'react';

import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import {Colors} from '../../assets/Colors';
import {Icons} from '../../assets/Icons';

class LoginButton extends React.PureComponent {
  render() {
    const {navigation, screen} = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('LoginScreen', {screen: screen});
        }}>
        <Image source={Icons.common.login} />
        <Text style={{color: Colors.primary}}>{strings.login}</Text>
      </TouchableOpacity>
    );
  }
}

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    marginBottom: 16,
    width: 108,
    height: 40,
    bottom: 0,
    borderRadius: 20,
    shadowOffset: {width: 4, height: 4},
    shadowColor: 'gray',
    shadowOpacity: 3,
    elevation: 8,
    backgroundColor: 'white',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    login: 'login',
  },
  th: {
    login: 'login',
  },
  en: {
    login: 'Login',
  },
});
