import React, {useState, useRef, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TutorialItem from './TutorialItem';
import Paginator from '../../components/Banner/Paginator';
import {Colors} from '../../../assets/Colors';

export default Tutorial = ({navigation, route}) => {
  const {asyncStorageKeyName, slides, screen} = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index ?? 0);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const updateStorage = async () => {
    try {
      await AsyncStorage.setItem(asyncStorageKeyName, 'true');
    } catch (err) {
      console.log('Error @Tutorial updateStorage(): ', err);
    }
  };

  const onTutorialFinish = () => {
    updateStorage();
    navigation.navigate('MainContainer', {goTo: screen}); // go back to the screen that it came from
  };

  useEffect(() => {
    /* back press won't trigger any navigation in tutorial screens */
    const backAction = () => {
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Paginator
        paddingTop={24}
        data={slides}
        scrollX={scrollX}
        paddingHorizontalSum={0}
      />
      <View style={{flex: 1}}>
        <FlatList
          data={slides}
          renderItem={({item}) => <TutorialItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      {currentIndex == slides.length - 1 ? (
        <TouchableOpacity
          style={[styles.button, {height: 50}]}
          onPress={() => onTutorialFinish()}>
          <Text style={{color: 'white'}}>{strings.understand}</Text>
        </TouchableOpacity>
      ) : (
        <View style={{height: 80}}></View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#565656',
  },
  button: {
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: Colors.primary,
    marginBottom: 30,
    padding: 15,
    paddingHorizontal: 26,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    understand: '',
  },
  th: {
    understand: '',
  },
  en: {
    understand: 'I understand',
  },
});
