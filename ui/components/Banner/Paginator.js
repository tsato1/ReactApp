import React from 'react';

import {
  View,
  StyleSheet,
  Animated,
  useWindowDimensions,
  Button,
} from 'react-native';
import {Colors} from '../../../assets/Colors';

/*
explanation about props:
paddingHorizontalSum is 0 if a slider item takes 100% of the screen width
paddingHorizontalSum is 32 if the padding for a slider item has 16 for paddingHorizontal
*/
export default Paginator = ({
  paddingTop,
  paddingBottom,
  paddingHorizontalSum,
  data,
  scrollX,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={[
        styles.dots,
        {paddingTop: paddingTop, paddingBottom: paddingBottom},
      ]}>
      {data &&
        data.length !== 0 &&
        data.map((_, i) => {
          const inputRange = [
            (i - 1) * (width - paddingHorizontalSum),
            i * (width - paddingHorizontalSum),
            (i + 1) * (width - paddingHorizontalSum),
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [5, 15, 5],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[styles.dot, {width: dotWidth, opacity}]}
              key={i.toString()}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    height: 4,
    borderRadius: 3,
    backgroundColor: Colors.primary,
    marginHorizontal: 5,
  },
});
