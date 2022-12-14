import React from 'react';

import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

export default TutorialItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'cover'}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    position: 'absolute',
  },
});
