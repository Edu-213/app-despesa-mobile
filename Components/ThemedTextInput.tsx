import React, { useState } from "react";
import { TextInput, TextInputProps, StyleSheet, View, TouchableOpacity } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";

type ThemedTextInputProps = TextInputProps & {
  iconName?: string;
};

export function ThemedTextInput({ 
    iconName, 
    style,
    secureTextEntry,
    ...props
    }: ThemedTextInputProps & { secureTextEntry?: boolean }) {
        const [isFocused, setIsFocused] = useState(false);
        const [showPassword, setShowPassword] = useState(false);

  const textColor = useThemeColor({ light: Colors.light.inputText, dark: Colors.dark.inputText }, 'text');
  const backgroundColor = useThemeColor({ light: isFocused ? Colors.light.inputBgFocus ?? Colors.light.inputBg : Colors.light.inputBg, dark: isFocused ? Colors.dark.inputBgFocus ?? Colors.dark.inputBg : Colors.dark.inputBg}, 'background');
  const iconColor = useThemeColor({light: Colors.light.iconColor, dark: Colors.dark.iconColor}, 'text');
  const borderColor = useThemeColor({ light: Colors.light.inputBorder, dark: Colors.dark.inputBorder}, 'text');

  return (
    <View>
        {iconName && (
            <Icon name={iconName} size={20} color={iconColor} style={styles.iconLeft}/>
        )}
        <TextInput
            style={[styles.input, { color: textColor, backgroundColor, borderColor }, style]}
            placeholderTextColor={textColor}
            secureTextEntry={secureTextEntry && !showPassword}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
        />

        {secureTextEntry && (
            <TouchableOpacity
          style={styles.iconRight}
          onPress={() => setShowPassword(!showPassword)}
            >
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color={iconColor}
          />
            </TouchableOpacity>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 327,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },

    iconLeft: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -18 }], // centraliza verticalmente
    zIndex: 1,
  },

  iconRight: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -16 }],
    zIndex: 1,
  },
});
