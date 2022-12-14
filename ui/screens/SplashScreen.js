import React from 'react';

import {SafeAreaView, Image, View, StyleSheet} from 'react-native';

export default SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{height: 200, width: 200, borderRadius: 100}}
        source={require('../../assets/images/catimg.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
