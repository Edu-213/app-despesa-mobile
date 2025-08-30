import React, { useState } from 'react';
import { ThemedImage } from "@/Components/ThemedImage";
import { ThemedText } from "@/Components/ThemedText";
import { ThemedView } from "@/Components/ThemedView";
import { Keyboard, TouchableWithoutFeedback,StyleSheet } from "react-native";
import { ThemedTextInput } from '@/Components/ThemedTextInput';
import { ThemedButton } from '@/Components/ThemedButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={style.Container}>
      <ThemedImage lightSource={require("../assets/images/logo.png")} darkSource={require("../assets/images/logo-dark.png")} resizeMode="contain" style={{marginBottom: 50}}/>
      <ThemedTextInput lightColor='#9BA1A8' darkColor='#B0B8BF' lightBg='#F5F6F7' darkBg='#242D35' lightFocusBg='#FFFFFF' darkFocusBg='#0F1B26' iconName='person-outline' value={email} onChangeText={setEmail} placeholder='Digite seu email' keyboardType="email-address" style={{ paddingLeft: 35 }}/>
      <ThemedTextInput lightColor='#9BA1A8' darkColor='#B0B8BF' lightBg='#F5F6F7' darkBg='#242D35' lightFocusBg='#FFFFFF' darkFocusBg='#0F1B26' iconName='lock-closed-outline' value={password} onChangeText={setPassword} placeholder='Digite sua senha' secureTextEntry style={{ paddingLeft: 35 }}/>
      <ThemedButton title='Login' lightGradient={['#2FDAFF', '#0E33F3']}  darkGradient={['#2F51FF','#0E33F3']} gradientStart={{x: 0, y:0}} gradientEnd={{ x: 1, y: 1}}></ThemedButton>
      <ThemedButton title='FORGOT PASSWORD' lightText='#6B7580' darkText='#B0B8BF'/>
      <ThemedText type='default'>OR</ThemedText>
      <ThemedButton title='CONTINUE WITH GOOGLE' iconName='logo-google' borderColor='#9BA1A8' style={{marginTop: 12}} />
      <ThemedButton title='CONTINUE WITH APPLE' iconName='logo-apple' borderColor='#9BA1A8' style={{marginTop: 12}}/>
      <ThemedText type='default' style={{marginTop: 12}}>Don`t have an account? <ThemedText type='link'>Register here</ThemedText></ThemedText>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
};

const style = StyleSheet.create({
  Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
  inputWrapper: {
    marginBottom: 15,
  },
})