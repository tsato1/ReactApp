import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

class PlatformPRO extends React.PureComponent {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text>asdf</Text>
      </View>
    );
  }
}

export default PlatformPRO;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
});
