import React from 'react';

import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../../../../assets/Colors';
import {Icons} from '../../../../assets/Icons';

const propTypes = {
  text: PropTypes.string,
  message: PropTypes.string,
  info: PropTypes.string,
  isDarkMode: PropTypes.bool,
};

class MCenterFeatureItem extends React.PureComponent {
  render() {
    const {onClick, imageSource, title, message, info, isDarkMode} = this.props;

    return (
      <TouchableOpacity style={styles.featureItem} onPress={() => onClick()}>
        <View
          style={[
            styles.featureItem.icon,
            {
              backgroundColor: isDarkMode
                ? Colors.light.component.iconBackground
                : Colors.dark.component.iconBackground,
            },
          ]}>
          <Image source={imageSource} />
        </View>
        <Text style={{paddingStart: 8}}>{title}</Text>
        <View style={{flex: 1}} />
        <Text style={{paddingEnd: 8}}>{message}</Text>
        <Text style={{paddingEnd: 8}}>{info}</Text>
        <Image source={Icons.common.arrowRight} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  featureItem: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    icon: {
      height: 36,
      width: 36,
      padding: 8,
      borderRadius: 5,
    },
  },
});

MCenterFeatureItem.propTypes = propTypes;

export default MCenterFeatureItem;
