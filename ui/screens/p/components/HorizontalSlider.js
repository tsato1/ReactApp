import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import bannerSlides from '../../../../assets/BannerSlides';
import PROItem from './PROItem';

class HorizontalSlider extends React.PureComponent {
  render() {
    const {title, list, platformIndex} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
          <View style={{flex: 1}} />
          <Text>{strings.checkMore}</Text>
        </View>
        <FlatList
          data={list}
          renderItem={({item}) => (
            <PROItem
              item={item}
              platformIndex={platformIndex}
              marginHorizontal={8}
            />
          )}
          horizontal
          contentContainerStyle={{paddingHorizontal: 8}}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(_, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  title: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    checkMore: '',
  },
  th: {
    checkMore: '',
  },
  en: {
    checkMore: 'Check More',
  },
});

export default HorizontalSlider;
