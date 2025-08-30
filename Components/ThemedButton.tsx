import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedButtonProps = TouchableOpacityProps & {
  lightGradient?: string[];
  darkGradient?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
  lightBg?: string;
  darkBg?: string;
  lightText?: string;
  darkText?: string;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  title: string;
  borderColor?: string;
};

export function ThemedButton({
  lightGradient,
  darkGradient,
  gradientStart,
  gradientEnd,
  lightBg,
  darkBg,
  lightText,
  darkText,
  title,
  iconName,
  iconPosition = 'left',
  borderColor,
  style,
  ...props
}: ThemedButtonProps) {
  const theme = useThemeColor({ light: 'light', dark: 'dark' }, 'text');
  const backgroundColor = useThemeColor({ light: lightBg, dark: darkBg }, 'background');
  const color = useThemeColor({ light: lightText, dark: darkText }, 'text');

  const gradientColors = theme === 'dark' ? darkGradient : lightGradient;

  const content = (
    <View style={styles.content}>
      {iconName && iconPosition === 'left' && (
        <Icon name={iconName} size={20} color={color} style={styles.icon} />
      )}
      <Text style={[styles.text, { color }]}>{title}</Text>
      {iconName && iconPosition === 'right' && (
        <Icon name={iconName} size={20} color={color} style={styles.icon} />
      )}
    </View>
  );

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }, style]} {...props}>
      {gradientColors ? (
        <LinearGradient colors={gradientColors as [string, string, ...string[]]} start={gradientStart} end={gradientEnd} style={[styles.button, style]}>
          {content}
        </LinearGradient>
      ) : (
        <View style={[styles.button, { backgroundColor, borderColor: borderColor ?? 'transparent', borderWidth: borderColor ? 1 : 0, }, style]}>
          {content}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 48,
    paddingHorizontal: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 8,
    position: 'absolute',
    left: -70,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
