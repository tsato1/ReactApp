import React from 'react';

import {View, Text, Image, FlatList, Animated, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import LocalizedStrings from 'react-native-localization';
import platformTypes from '../utils/PlatformTypes';

class PlatformTypesColumn extends React.PureComponent {
  render() {
    const {navigation, currentPlatformIndex, onPlatformTypeClick} = this.props;

    return (
      <View>
        <FlatList
          data={platformTypes}
          renderItem={({item}) => (
            <PlatformTypeItem
              item={item}
              isFocused={currentPlatformIndex == item.id}
              onPlatformTypeClick={onPlatformTypeClick}
            />
          )}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

class PlatformTypeItem extends React.PureComponent {
  render() {
    const {navigation, item, isFocused, onPlatformTypeClick} = this.props;

    const backgroundColor = isFocused ? item.backgroundColor : 'white';
    const icon = isFocused ? item.imageActive : item.imageInactive;
    const textColor = isFocused ? 'white' : 'gray';

    return (
      <TouchableOpacity
        style={[styles.platformTypeButton, {backgroundColor: backgroundColor}]}
        onPress={() => {
          onPlatformTypeClick(item.id, item.title);
        }}>
        <Image source={icon} />
        <View style={{width: 6}} />
        <Text style={{color: textColor}}>{item.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default PlatformTypesColumn;

const styles = StyleSheet.create({
  platformTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 12,
    marginBottom: 12,
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    platformS: '',
    platformE: '',
    platformC: '',
    platformp: '',
    platformL: '',
    platformK: '',
  },
  th: {
    platformS: '',
    platformE: '',
    platformC: '',
    platformp: '',
    platformL: '',
    platformK: '',
  },
  en: {
    platformS: '',
    platformE: '',
    platformC: '',
    platformp: '',
    platformL: '',
    platformK: '',
  },
});
