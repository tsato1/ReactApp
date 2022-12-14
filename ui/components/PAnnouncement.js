import React from 'react';

import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {Icons} from '../../assets/Icons';

class PAnnouncement extends React.PureComponent {
  render() {
    const {margin} = this.props;
    return (
      <TouchableOpacity style={[styles.container, {margin: margin}]}>
        <Image
          style={{marginHorizontal: 8}}
          source={Icons.common.pAnnouncement}
        />
        <Text style={{marginEnd: 8}}>P Announcement</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default PAnnouncement;
