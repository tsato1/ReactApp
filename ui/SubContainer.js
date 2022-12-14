import React, {useEffect, useState, useContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizedStrings from 'react-native-localization';
import {createStackNavigator} from '@react-navigation/stack';
import MpageScreen from './screens/MPage/MpageScreen';
import GCenterScreen from './screens/g/GCenterScreen';
import BCenterScreen from './screens/v/BCenterScreen';
import PCenterScreen from './screens/p/PrCenterScreen';
import MCenterScreen from './screens/m/MCenterScreen';
import TopNavbar from './components/TopNavbar';
import Tutorial from './screens/tutorial/Tutorial';
import MpageScreenBeforeLogin from './screens/mPage/MpageScreenBeforeLogin';
import {
  MpageTutorialSlides,
  GTutorialSlides,
  BTutorialSlides,
  PTutorialSlides,
  MTutorialSlides,
} from '../assets/TutorialSlides';
import {useTutorialStatus} from '../hooks/useTutorialStatus';
import useUserStore from '../hooks/useUserStore';

const Stack = createStackNavigator();

// to reset viewedTutorial
// const clearTutorial = async () => {
//   try {
//     await AsyncStorage.removeItem('@viewedTutorial');
//   } catch (err) {
//     console.log('Error @clearTutorial: ', err);
//   }
// };

const MPageNavigator = ({navigation, route}) => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const [viewedTutorial, setViewedTutorial] = useState(null);
  const checkTutorial = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedMPageTutorial');

      if (value == null) {
        navigation.navigate('Tutorial', {
          asyncStorageKeyName: '@viewedMPageTutorial',
          slides: MPageTutorialSlides,
          screen: strings.MPage,
        });
      }
    } catch (err) {
      console.log('Error @checkTutorial: ', err);
    }
  };

  useEffect(() => {
    checkTutorial();
  }, []);

  useEffect(() => {
    console.log('useEffect is called. isLoggedIn is changed');
  }, [isLoggedIn]);

  return (
    <Stack.Navigator>
      {!isLoggedIn && (
        <Stack.Screen
          name="MPageScreenBeforeLogin"
          component={MpageScreenBeforeLogin}
          options={{
            header: ({navigation, route}) => (
              <TopNavbar
                navigation={navigation}
                title={strings.MPage}
                showCustomerService={true}
              />
            ),
          }}
        />
      )}
      <Stack.Screen
        name={'MPageScreen'}
        component={MPageScreen}
        options={{
          header: ({navigation, route}) => (
            <TopNavbar
              navigation={navigation}
              title={strings.MPage}
              showMPageSettings={true}
              showCustomerService={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export {MPageNavigator};

const GCenterNavigator = ({navigation, route}) => {
  const [viewedTutorial, setViewedTutorial] = useState(null);
  const checkTutorial = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedGCenterTutorial');

      if (value == null) {
        navigation.navigate('Tutorial', {
          asyncStorageKeyName: '@viewedGCenterTutorial',
          slides: GTutorialSlides,
          screen: strings.GCenter,
        });
      }
    } catch (err) {
      console.log('Error @checkTutorial: ', err);
    }
  };

  useEffect(() => {
    checkTutorial();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GCenterScreen"
        component={GCenterScreen}
        options={{
          header: ({navigation}) => (
            <TopNavbar
              navigation={navigation}
              showLogo={true}
              showFavoriteMenu={true}
              showCustomerService={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export {GCenterNavigator};

const bCenterNavigator = ({navigation, route}) => {
  const [viewedTutorial, setViewedTutorial] = useState(null);
  const checkTutorial = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedbCenterTutorial');

      if (value == null) {
        navigation.navigate('Tutorial', {
          asyncStorageKeyName: '@viewedbCenterTutorial',
          slides: bTutorialSlides,
          screen: strings.bCenter,
        });
      }
    } catch (err) {
      console.log('Error @checkTutorial: ', err);
    }
  };

  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  const checkLoggedIn = () => {
    if (!isLoggedIn) {
      navigation.navigate('LoginScreen', {screen: strings.GCenter});
    }
  };

  useEffect(() => {
    checkTutorial();
    checkLoggedIn();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bCenterScreen"
        component={bCenterScreen}
        options={{
          header: ({navigation, route}) => (
            <TopNavbar
              navigation={navigation}
              title={strings.bCenter}
              showCustomerService={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export {bCenterNavigator};

const PROCenterNavigator = ({navigation, route}) => {
  const [viewedTutorial, setViewedTutorial] = useState(null);
  const checkTutorial = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedPROCenterTutorial');

      if (value == null) {
        navigation.navigate('Tutorial', {
          asyncStorageKeyName: '@viewedPROCenterTutorial',
          slides: PROTutorialSlides,
          screen: strings.PROCenter,
        });
      }
    } catch (err) {
      console.log('Error @checkTutorial: ', err);
    }
  };

  useEffect(() => {
    checkTutorial();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PROCenterScreen"
        component={PROCenterScreen}
        options={{
          header: ({navigation, route}) => (
            <TopNavbar
              navigation={navigation}
              title={strings.PROCenter}
              showCustomerService={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export {PROCenterNavigator};

const MCenterNavigator = ({navigation, route}) => {
  const [viewedTutorial, setViewedTutorial] = useState(null);
  const checkTutorial = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedMCenterTutorial');

      if (value == null) {
        navigation.navigate('Tutorial', {
          asyncStorageKeyName: '@viewedMCenterTutorial',
          slides: MTutorialSlides,
          screen: strings.mCenter,
        });
      }
    } catch (err) {
      console.log('Error @checkTutorial: ', err);
    }
  };

  useEffect(() => {
    checkTutorial();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MCenterScreen"
        component={MCenterScreen}
        options={{
          header: ({navigation}) => (
            <TopNavbar
              navigation={navigation}
              showEditPersonalInfo={true}
              showNotification={true}
              showCustomerService={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export {MCenterNavigator as MCenterNavigator};

let strings = new LocalizedStrings({
  'zh-cn': {
    mPage: '',
    gCenter: '',
    bCenter: '',
    pCenter: '',
    mCenter: '',
  },
  th: {
    mPage: '',
    gCenter: '',
    bCenter: '',
    pCenter: '',
    mCenter: '',
  },
  en: {
    MPage: 'MPage',
    mPage: '',
    gCenter: '',
    bCenter: '',
    pCenter: '',
    mCenter: '',
  },
});
