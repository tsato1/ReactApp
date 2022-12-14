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

class ProviderItem extends React.PureComponent {
  render() {
    const {navigation, item} = this.props;
    const isDarkMode = Appearance.getColorScheme() === 'dark';

    return (
      <TouchableOpacity style={styles.imageContainer} onPress={() => {}}>
        <Image
          style={[
            styles.image,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.component.background
                : Colors.light.component.background,
            },
          ]}
          source={isDarkMode ? item.imageDark : item.imageLight}
        />
      </TouchableOpacity>
    );
  }
}

export default ProviderItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imageContainer: {
    paddingBottom: 12,
  },
  image: {
    resizeMode: 'contain',
    borderRadius: 5,
    width: '100%',
    height: 90,
  },
});
