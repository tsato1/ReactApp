import React from 'react';

import {
  View,
  Text,
  Image,
  SectionList,
  TouchableOpacity,
  StyleSheet,
  Appearance,
} from 'react-native';

import {Colors} from '../../../../assets/Colors';
import {Icons} from '../../../../assets/Icons';

class PROItem extends React.PureComponent {
  render() {
    const {navigation, item, platformIndex, marginHorizontal} = this.props;
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const platformColor =
      platformIndex == 0
        ? Colors.brands.S
        : platformIndex == 1
        ? Colors.brands.ES
        : platformIndex == 2
        ? Colors.brands.C
        : platformIndex == 3
        ? Colors.brands.P
        : platformIndex == 4
        ? Colors.brands.S
        : platformIndex == 5
        ? Colors.brands.K
        : Colors.primary;
    const maxLength = 14;
    return (
      <TouchableOpacity
        style={[styles.imageContainer, {marginHorizontal}]}
        onPress={() => {}}>
        <Image
          style={[
            styles.image,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.background
                : Colors.light.component.background,
            },
          ]}
          source={{uri: item.modalBanner}}
        />
        <View
          style={[
            styles.description,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.surface1
                : Colors.light.component.surface1,
            },
          ]}>
          <Text
            numberOfLines={1}
            style={{numberOfLines: 1, fontWeight: 'bold'}}>
            {item.title}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
            <Text numberOfLines={1} style={{fontSize: 12}}>
              {item.description.length > maxLength
                ? item.description.substring(0, maxLength) + '...'
                : item.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                end: 0,
                bottom: 0,
              }}>
              <Text
                style={{
                  color: platformColor,
                }}>
                {item.action.label}
              </Text>
              <Image
                source={Icons.common.arrowRight}
                tintColor={platformColor}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PROItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imageContainer: {
    paddingBottom: 12,
    borderRadius: 5,
  },
  image: {
    resizeMode: 'cover',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: '100%',
    minWidth: 260,
    height: 138,
  },
  description: {
    justifyContent: 'center',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
