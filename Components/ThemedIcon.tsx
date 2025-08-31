import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors } from '@/constants/Colors';

type ThemedIconProps = TouchableOpacityProps & {
    name: string;
    size?: number;
    onPress?: () => void;
    useBorder?: boolean; 
};

export function ThemedIcon({
  name,
  size = 24,
  onPress,
  style,
  useBorder,
  ...props
}: ThemedIconProps) {
 const color = useThemeColor({ light: Colors.light.text, dark: Colors.dark.text}, 'text');
 const borderColor = useThemeColor({ light: Colors.light.borderColor, dark: Colors.dark.borderColor}, 'text');
 return (
    <TouchableOpacity onPress={onPress} style={[styles.button, useBorder ? {borderColor, borderWidth: 1} : { borderWidth: 0 }, style]}>
        <Icon name={name} size={size} color={color} {...props} />
    </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
    button: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    }
})