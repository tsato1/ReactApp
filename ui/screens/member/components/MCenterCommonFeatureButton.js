import React from 'react';

import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
};

class MCenterCommonFeatureButton extends React.PureComponent {
  render() {
    const {onClick, imageSource, text} = this.props;

    return (
      <TouchableOpacity style={styles.button} onPress={() => onClick()}>
        <Image style={styles.button.icon} source={imageSource} />
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    icon: {
      margin: 4,
    },
  },
});

MCenterCommonFeatureButton.propTypes = propTypes;

export default MCenterCommonFeatureButton;
