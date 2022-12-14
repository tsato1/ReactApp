import React, {useEffect, useState} from 'react';

import {Modal} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import NetInfo from '@react-native-community/netinfo';
import FunDialog from './FunDialog';
import {Icons} from '../../../assets/Icons';

const OfflineDialog = () => {
  const [isOnline, setIsOnline] = useState(null);

  const checkNetwork = () => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(
        'Connection type' + state.type + ' isConnected=' + state.isConnected,
      );
      setIsOnline(state.isConnected);
    });
  };

  useEffect(() => {
    checkNetwork();
  }, []);

  return (
    !isOnline && (
      <FunDialog
        title={strings.networkError}
        imageSource={Icons.common.networkError}
      />
    )
  );
};

export default OfflineDialog;

let strings = new LocalizedStrings({
  'zh-cn': {
    networkError: 'Network Error\nPlease check the internet.',
  },
  th: {
    networkError: 'Network Error\nPlease check the internet.',
  },
  en: {
    networkError: 'Network Error\nPlease check the internet.',
  },
});
