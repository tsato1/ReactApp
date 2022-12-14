import React, {useState, useEffect} from 'react';

import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import LocalizedStrings from 'react-native-localization';

import useUserStore from '../../../hooks/useUserStore';
import usePROStore from '../../../hooks/usePROStore';

import {Icons} from '../../../assets/Icons';
import PROAnnouncement from '../../components/PROAnnouncement';
import HorizontalSlider from './components/HorizontalSlider';

const PROActivitiesScreen = () => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const PROCategories = usePROStore(state => state.PROCategories);
  const getPROCategories = usePROStore(state => state.getPROCategories);
  const getPROs = usePROStore(state => state.getPROs);
  const sPROs = usePROStore(state => state.sPROs);
  const sASDFPROs = usePROStore(state => state.sASDFPROs);
  const sDTPROs = usePROStore(state => state.sDTPROs);
  const esPROs = usePROStore(state => state.esPROs);
  const cPROs = usePROStore(state => state.cPROs);
  const p2pPROs = usePROStore(state => state.p2pPROs);
  const lPROs = usePROStore(state => state.lPROs);
  const kPROs = usePROStore(state => state.kPROs);
  const otherPROs = usePROStore(state => state.otherPROs);

  const preparation = async () => {
    await getPROCategories();
    PROCategories.forEach(item => {
      getPROs(item.categoryName);
    });
  };

  useEffect(() => {
    preparation();
  });

  return (
    <View style={styles.container}>
      {!sPROs &&
      !sASDFPROs &&
      !sDTPROs &&
      !esPROs &&
      !cPROs &&
      !p2pPROs &&
      !lPROs &&
      !kPROs &&
      !otherPROs ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{marginBottom: 12}} source={Icons.PROCenter.ticket} />
          <Text>{strings.currentlyNoPRO}</Text>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          {isLoggedIn && <PROAnnouncement margin={16} />}

          {sASDFPROs && sASDFPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.sASDFPROs}
              list={sASDFPROs}
              platformIndex={0}
            />
          )}
          {sPROs && sPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.sPROs}
              list={sPROs}
              platformIndex={0}
            />
          )}
          {sDTPROs && sDTPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.sDTPROs}
              list={sDTPROs}
              platformIndex={0}
            />
          )}
          {esPROs && esPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.esPROs}
              list={esPROs}
              platformIndex={1}
            />
          )}
          {cPROs && cPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.cPROs}
              list={cPROs}
              platformIndex={2}
            />
          )}
          {p2pPROs && p2pPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.lPROs}
              list={p2pPROs}
              platformIndex={3}
            />
          )}
          {lPROs && lPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.p2pPROs}
              list={lPROs}
              platformIndex={4}
            />
          )}
          {kPROs && kPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.kPROs}
              list={kPROs}
              platformIndex={5}
            />
          )}
          {otherPROs && otherPROs.length !== 0 && (
            <HorizontalSlider
              title={strings.othersPROs}
              list={otherPROs}
              platformIndex={6}
            />
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    currentlyNoPRO: '',
    sDTPROs: '',
    sPROs: '',
    sASDFPROs: '',
    esPROs: '',
    cPROs: '',
    lPROs: '',
    pPROs: '',
    kPROs: '',
    othersPROs: '',
  },
  th: {
    currentlyNoPRO: '',
    sDTPROs: '',
    sPROs: '',
    sASDFPROs: '',
    esPROs: '',
    cPROs: '',
    lPROs: '',
    pPROs: '',
    kPROs: '',
    othersPROs: '',
  },
  en: {
    currentlyNoPRO: '',
    sDTPROs: '',
    sPROs: '',
    sASDFPROs: '',
    esPROs: '',
    cPROs: '',
    lPROs: '',
    pPROs: '',
    kPROs: '',
    othersPROs: '',
  },
});

export default PROActivitiesScreen;
