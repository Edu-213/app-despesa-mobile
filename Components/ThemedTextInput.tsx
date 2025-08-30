import React, { useState } from "react";
import { TextInput, TextInputProps, StyleSheet, View, TouchableOpacity } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import Icon from 'react-native-vector-icons/Ionicons';

type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  lightBg?: string;
  darkBg?: string;
  lightFocusBg?: string;
  darkFocusBg?: string;
  iconName?: string;
};

export function ThemedTextInput({ 
    lightColor, 
    darkColor, 
    lightBg, 
    darkBg, 
    lightFocusBg, 
    darkFocusBg, 
    iconName, 
    style,
    secureTextEntry,
    ...props
    }: ThemedTextInputProps & { secureTextEntry?: boolean }) {
        const [isFocused, setIsFocused] = useState(false);
        const [showPassword, setShowPassword] = useState(false);

  const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const backgroundColor = useThemeColor({ light: isFocused ? lightFocusBg ?? lightBg : lightBg, dark: isFocused ? darkFocusBg ?? darkBg : darkBg}, 'background');
  const iconColor = useThemeColor({light: '242D35', dark: '#F5F6F7'}, 'text');

  return (
    <View>
        {iconName && (
            <Icon name={iconName} size={20} color={iconColor} style={styles.iconLeft}/>
        )}
        <TextInput
            style={[styles.input, { color: textColor, backgroundColor }, style]}
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
    borderColor: '#6B7580',
    borderRadius: 8,
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
