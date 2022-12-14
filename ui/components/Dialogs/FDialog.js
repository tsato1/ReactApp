import React from 'react';

import {StyleSheet, Text, Image, View, Appearance, Modal} from 'react-native';
import {Colors} from '../../../assets/Colors';

class FunDialog extends React.PureComponent {
  render() {
    const {title, message, imageSource, positiveButton, negativeButton} =
      this.props;

    const isDarkMode = Appearance.getColorScheme() === 'dark';

    return (
      <Modal onRequestClose={() => {}} transparent={true}>
        <View
          style={[
            styles.container,
            {
              visible: true,
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
          ]}>
          <View
            style={[
              styles.dialogContainer,
              {
                backgroundColor: isDarkMode
                  ? Colors.dark.component.surface1
                  : Colors.light.component.surface1,
              },
            ]}>
            <Image style={{margin: 4}} source={imageSource} />
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              {title}
            </Text>
            {message && <Text>{message}</Text>}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  dialogContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    width: 160,
    opacity: 1,
    borderRadius: 5,
  },
});

export default FunDialog;
