import React, {useState, useEffect, useContext} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Appearance,
  SectionList,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAtom} from 'jotai';
import {atomWithStore} from 'jotai-zustand';

import useUserStore from '../../../hooks/useUserStore';
import useGStore from '../../../hooks/useGStore';
import Banner from '../../components/Banner/Banner';
import LoginButton from '../../components/LoginButton';
import PlatformTypesColumn from './components/PlatformTypesColumn';
import ProviderItem from './components/ProviderItem';
import PROItem from '../PRO/components/PROItem';
import PlatformPROs from './components/PlatformPROs';
import PROAnnouncement from '../../components/PROAnnouncement';
import {Icons} from '../../../assets/Icons';
import {Images} from '../../../assets/Images';

import BannerSlides from '../../../assets/BannerSlides';
import {set} from 'react-native-reanimated';

const GCenterScreen = ({navigation}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const allGCategories = useGStore(state => state.getAllGCategories);
  const getAllGCategories = useGStore(state => state.getAllGCategories);

  const [currentlyShownBanners, setCurrentlyShownBanners] = useState([]);
  const setBanners = useGStore(state => state.setBanners);
  const sportsBanners = useGStore(state => state.sportsBanners);
  const esportsBanners = useGStore(state => state.esportsBanners);
  const cBanners = useGStore(state => state.cBanners);
  const p2pBanners = useGStore(state => state.p2pBanners);
  const lBanners = useGStore(state => state.lBanners);
  const kBanners = useGStore(state => state.kBanners);

  const setProviders = useGStore(state => state.setProviders);
  const setPROs = useGStore(state => state.setPROs);

  const [currentlyShownSectionList, setCurrentlyShownSectionList] =
    useState(sportsSectionList);
  const setSectionList = useGStore(state => state.setSectionList);
  const sportsSectionList = useGStore(state => state.sportsSectionList);
  const esportsSectionList = useGStore(state => state.esportsSectionList);
  const cSectionList = useGStore(state => state.cSectionList);
  const p2pSectionList = useGStore(state => state.p2pSectionList);
  const lSectionList = useGStore(state => state.lSectionList);
  const kSectionList = useGStore(state => state.kSectionList);

  const preparation = async () => {
    await getAllGCategories();
    await setBanners();
    await setProviders();
    await setPROs();
    await setSectionList();
    onPlatformTypeClick(0, strings.GCenter);
  };

  useEffect(() => {
    preparation();
  }, []);

  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [currentPlatformTitle, setCurrentPlatformTitle] = useState(
    strings.defaultTitle,
  );

  const onPlatformTypeClick = (itemId, title) => {
    setCurrentPlatformIndex(itemId);
    setCurrentPlatformTitle(title);

    if (itemId == 0) {
      setCurrentlyShownBanners(sportsBanners);
      setCurrentlyShownSectionList(sportsSectionList);
    } else if (itemId == 1) {
      setCurrentlyShownBanners(esportsBanners);
      setCurrentlyShownSectionList(esportsSectionList);
    } else if (itemId == 2) {
      setCurrentlyShownBanners(cBanners);
      setCurrentlyShownSectionList(cSectionList);
    } else if (itemId == 3) {
      setCurrentlyShownBanners(p2pBanners);
      setCurrentlyShownSectionList(p2pSectionList);
    } else if (itemId == 4) {
      setCurrentlyShownBanners(lBanners);
      setCurrentlyShownSectionList(lSectionList);
    } else if (itemId == 5) {
      setCurrentlyShownBanners(kBanners);
      setCurrentlyShownSectionList(kSectionList);
    }
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        {currentlyShownBanners && currentlyShownBanners.length !== 0 && (
          <Banner bannerItems={currentlyShownBanners} />
        )}
        {isLoggedIn && <PROAnnouncement />}
        <View style={styles.platformContent}>
          <View style={{width: '24%'}}>
            <PlatformTypesColumn
              currentPlatformIndex={currentPlatformIndex}
              onPlatformTypeClick={(itemId, title) =>
                onPlatformTypeClick(itemId, title)
              }
            />
          </View>
          <View style={{width: 12}} />
          {currentlyShownSectionList && (
            <SectionList
              sections={currentlyShownSectionList}
              keyExtractor={(item, index) => index}
              renderItem={({item}) =>
                item.isProvider ? (
                  <ProviderItem item={item} />
                ) : (
                  <PROItem item={item} platformIndex={currentPlatformIndex} />
                )
              }
              renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
            />
          )}
        </View>
      </View>
      {!isLoggedIn && (
        <LoginButton navigation={navigation} screen={strings.GCenter} />
      )}
    </React.Fragment>
  );
};

export default GCenterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  platformContent: {
    flex: 1,
    flexDirection: 'row',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    GCenter: '',
    defaultTitle: '',
    platform: '',
    PRO: '',
  },
  th: {
    GCenter: '',
    defaultTitle: '',
    platform: '',
    PRO: '',
  },
  en: {
    GCenter: '',
    defaultTitle: '',
    platform: '',
    PRO: '',
  },
});
