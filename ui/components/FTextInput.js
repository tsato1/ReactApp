import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import {Colors} from '../../assets/Colors';

const FTextInput = React.memo(
  ({
    title, // shown right above the box
    value, // user's inputs
    onChangeText,
    hint, // explanation shown inside the box
    keyboardType,
    hasPhoneNumber,
    buttonImageSource,
    onButtonClick,
    description, // shown right under the box
    hasError,
    errorMessage, // shown right under the box
    isDarkMode,
  }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={{paddingBottom: 16}}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 8,
          }}>
          {hasPhoneNumber && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 12,
              }}>
              <Text style={{marginEnd: 16}}>{'+86'}</Text>
            </View>
          )}
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDarkMode
                  ? Colors.dark.component.surface1
                  : Colors.light.component.surface1,
                borderWidth: 1,
                borderColor: hasError
                  ? Colors.error
                  : isFocused
                  ? Colors.primary
                  : isDarkMode
                  ? Colors.dark.component.border
                  : Colors.light.component.border,
              },
            ]}
            onChangeText={value => onChangeText(value)}
            value={value}
            placeholder={hint}
            keyboardType={keyboardType}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          {buttonImageSource && (
            <TouchableOpacity style={styles.button} onPress={onButtonClick()}>
              <Image source={buttonImageSource} />
            </TouchableOpacity>
          )}
        </View>
        {description && <Text style={{fontSize: 12}}>{description}</Text>}
        {errorMessage && <Text style={{fontSize: 12}}>{errorMessage}</Text>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginTop: 12,
    borderRadius: 5,
    borderWidth: 0,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    padding: 14,
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 14,
    ...Platform.select({
      ios: {
        marginTop: 12,
      },
      android: {
        marginTop: 17,
      },
    }),
  },
});

export default FTextInput;
