import React from 'react';

import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import {useCountdown} from '../../../../hooks/useCountdown';
import {Colors} from '../../../../assets/Colors';
import {Icons} from '../../../../assets/Icons';

class MyWalletCard extends React.PureComponent {
  render() {
    const {isDarkMode} = this.props;

    return (
      <View style={styles.container}>
        {/*  */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingBottom: 10, flex: 1}}>
            {strings.mainWalletAmount}
          </Text>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={{color: Colors.primary}}>{strings.checkMore}</Text>
            <Image
              tintColor={Colors.primary}
              source={Icons.common.arrowRight}
            />
          </TouchableOpacity>
        </View>
        <Text style={{paddingBottom: 4, fontSize: 24}}>$1000000</Text>
        <Text style={{paddingBottom: 10, fontSize: 10}}>
          {strings.remainingWithdrawCount.replace('{count}', 1234)}
        </Text>
        {/*  */}
        <View style={{paddingBottom: 14, flexDirection: 'row'}}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isDarkMode
                  ? Colors.dark.component.background
                  : Colors.light.component.background,
              },
            ]}>
            <Text>{strings.deposit}</Text>
          </TouchableOpacity>
          <View style={{width: 8}} />
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isDarkMode
                  ? Colors.dark.component.background
                  : Colors.light.component.background,
              },
            ]}>
            <Text>{strings.transfer}</Text>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <View style={{marginBottom: 14, height: 1, backgroundColor: 'gray'}} />
        {/*  */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>{strings.totalTurnoverAmount}</Text>
          <TouchableOpacity style={{paddingBottom: 16, flexDirection: 'row'}}>
            <Text style={{color: Colors.primary}}>{strings.checkMore}</Text>
            <Image
              tintColor={Colors.primary}
              source={Icons.common.arrowRight}
            />
          </TouchableOpacity>
        </View>
        <Text style={{paddingBottom: 4, fontSize: 24}}>$1000000</Text>
        <Text style={{fontSize: 10}}>
          {strings.lastUpdate.replace('{date}', '2022/10/26 12:01:03')}
        </Text>
      </View>
    );
  }
}

export default MyWalletCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    checkMore: '',
    mainWalletAmount: '',
    totalTurnoverAmount: '',
    remainingWithdrawCount: '',
    deposit: '',
    transfer: '',
    lastUpdate: '',
  },
  th: {
    checkMore: '',
    mainWalletAmount: '',
    totalTurnoverAmount: '',
    remainingWithdrawCount: '',
    deposit: '',
    transfer: '',
    lastUpdate: '',
  },
  en: {
    checkMore: '',
    mainWalletAmount: '',
    totalTurnoverAmount: '',
    remainingWithdrawCount: '',
    deposit: '',
    transfer: '',
    lastUpdate: '',
  },
});
