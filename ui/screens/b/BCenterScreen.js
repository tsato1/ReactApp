import React, {useState, useEffect, useContext} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Appearance,
  TouchableOpacity,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginButton from '../../components/LoginButton';
import {Colors} from '../../../assets/Colors';
import {Icons} from '../../../assets/Icons';

const bCenterScreen = ({navigation}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const [isBalanceExpanded, setIsBalanceExpanded] = useState(false);

  const onBalanceExpandClick = () => {
    setIsBalanceExpanded(!isBalanceExpanded);
  };

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <View
          style={[
            {
              paddingTop: 20,
              paddingBottom: 4,
              paddingHorizontal: 16,
              borderRadius: 5,
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 4,
                }}>
                <Text>{strings.totalBalance}</Text>
                <Image
                  style={{marginHorizontal: 6}}
                  source={Icons.common.refresh}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 4,
                }}>
                <Text style={{fontSize: 28}}>{'¥ ******'}</Text>
                <Image
                  style={{marginHorizontal: 6}}
                  source={Icons.common.visibility}
                />
              </View>
            </View>
            <View style={{flex: 1}} />
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 48,
                height: 48,
                borderRadius: 12,
                backgroundColor: Colors.primary,
              }}>
              <Image source={Icons.common.add} />
            </TouchableOpacity>
          </View>

          {isBalanceExpanded && (
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%'}}>
                <Text>{strings.mainAccountBalance}</Text>
                <Text>{'asdf'}</Text>
                <Text>{strings.cAccountBalance}</Text>
                <Text>{'asdf'}</Text>
                <Text>{strings.kypAccountBalance}</Text>
                <Text>{'asdf'}</Text>
                <Text>{strings.ptlAccountBalance}</Text>
                <Text>{'asdf'}</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'gray',
                  width: 1,
                }}
              />
              <View style={{width: '50%', marginStart: 20}}>
                <Text>{strings.SESAccountBalance}</Text>
                <Text>{'asdf'}</Text>
                <Text>{strings.kAccountBalance}</Text>
                <Text>{'asdf'}</Text>
                <Text>{strings.lAccountBalance}</Text>
                <Text>{'asdf'}</Text>
                <Text>{strings.kAccountBalance}</Text>
                <Text>{'asdf'}</Text>
              </View>
            </View>
          )}

          <TouchableOpacity
            style={{
              width: 28,
              height: 28,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 4,
            }}
            onPress={() => {
              onBalanceExpandClick();
            }}>
            {isBalanceExpanded ? (
              <Image source={Icons.common.arrowUp} />
            ) : (
              <Image source={Icons.common.arrowDown} />
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 12,
          }}>
          <TouchableOpacity
            style={[
              styles.card,
              {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: '31%',
                backgroundColor: isDarkMode
                  ? Colors.dark.component.surface1
                  : Colors.light.component.surface1,
              },
            ]}>
            <Image source={Icons.bCenter.transfer} />
            <Text>{strings.transfer}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.card,
              {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: '31%',
                backgroundColor: isDarkMode
                  ? Colors.dark.component.surface1
                  : Colors.light.component.surface1,
              },
            ]}>
            <Image source={Icons.bCenter.withdraw} />
            <Text>{strings.withdraw}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.card,
              {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: '31%',
                backgroundColor: isDarkMode
                  ? Colors.dark.component.surface1
                  : Colors.light.component.surface1,
              },
            ]}>
            <Image source={Icons.bCenter.accountManagement} />
            <Text>{strings.accountManagement}</Text>
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: 20, marginBottom: 16}}>
          {strings.announcement}
        </Text>

        <View style={{flexDirection: 'row', marginBottom: 14}}>
          <Text style={{flex: 1}}>{strings.transactionRecord}</Text>
          <Text style={{fontSize: 12}}>{strings.checkMore}</Text>
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
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 24, width: 24}}
              source={Icons.bCenter.deposit}
            />
            <View style={{flex: 1}}>
              <Text>asdf</Text>
              <Text>2021/10/10 14:00:00</Text>
            </View>
            <View>
              <Text style={{textAlign: 'right'}}>502.20</Text>
              <Text style={{textAlign: 'right'}}>success</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 24, width: 24}}
              source={Icons.bCenter.transfer}
            />
          </View>
          <View style={styles.divider} />
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 24, width: 24}}
              source={Icons.bCenter.withdraw}
            />
          </View>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default bCenterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  card: {
    padding: 16,
    borderRadius: 5,
  },
  divider: {
    height: 1,
    width: '100%',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    totalBalance: '',
    transfer: '',
    withdraw: '',
    accountManagement: '',
    announcement: '',
    transactionRecord: '',
    checkMore: '',
    mainAccountBalance: '',
    cAccountBalance: '',
    kypAccountBalance: '',
    ptlAccountBalance: '',
    SESAccountBalance: '',
    pAccountBalance: '',
    lAccountBalance: '',
    kAccountBalance: '',
  },
  th: {
    totalBalance: '',
    transfer: '',
    withdraw: '',
    accountManagement: '',
    announcement: '',
    transactionRecord: '',
    checkMore: '',
    mainAccountBalance: '',
    cAccountBalance: '',
    kypAccountBalance: '',
    ptlAccountBalance: '',
    SESAccountBalance: '',
    pAccountBalance: '',
    lAccountBalance: '',
    kAccountBalance: '',
  },
  en: {
    totalBalance: '',
    transfer: '',
    withdraw: '',
    accountManagement: '',
    announcement: '',
    transactionRecord: '',
    checkMore: '',
    mainAccountBalance: '',
    cAccountBalance: '',
    kypAccountBalance: '',
    ptlAccountBalance: '',
    SESAccountBalance: '',
    pAccountBalance: '',
    lAccountBalance: '',
    kAccountBalance: '',
  },
});
