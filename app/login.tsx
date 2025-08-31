import React, { useState } from 'react';
import { ThemedImage } from "@/Components/ThemedImage";
import { ThemedText } from "@/Components/ThemedText";
import { ThemedView } from "@/Components/ThemedView";
import { Keyboard, TouchableWithoutFeedback,StyleSheet } from "react-native";
import { ThemedTextInput } from '@/Components/ThemedTextInput';
import { ThemedButton } from '@/Components/ThemedButton';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={style.container}>
      <ThemedImage lightSource={require("../assets/images/logo.png")} darkSource={require("../assets/images/logo-dark.png")} resizeMode="contain" style={{marginBottom: 50}}/>
      <ThemedTextInput iconName='person-outline' value={email} onChangeText={setEmail} placeholder='Digite seu email' keyboardType="email-address" style={{ paddingLeft: 35 }}/>
      <ThemedTextInput iconName='lock-closed-outline' value={password} onChangeText={setPassword} placeholder='Digite sua senha' secureTextEntry style={{ paddingLeft: 35 }}/>
      <ThemedButton title='Login' useGradient gradientStart={{x: 0, y:0}} gradientEnd={{ x: 1, y: 1}} onPress={() => router.replace('/')}></ThemedButton>
      <ThemedButton title='FORGOT PASSWORD' lightText={Colors.light.tertiaryText} darkText={Colors.dark.secondaryText} onPress={() => router.push('/changePassword')}/>
      <ThemedText type='default'>OR</ThemedText>
      <ThemedButton title='CONTINUE WITH GOOGLE' iconName='logo-google' style={{marginTop: 10}} showBorder/>
      <ThemedButton title='CONTINUE WITH APPLE' iconName='logo-apple' style={{marginTop: 10}} showBorder/>
      <ThemedText type='default' style={{marginTop: 12}}>Don`t have an account? <ThemedText type='link'>Register here</ThemedText></ThemedText>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
};

const style = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})