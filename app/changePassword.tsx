import { ThemedButton } from "@/Components/ThemedButton";
import { ThemedIcon } from "@/Components/ThemedIcon";
import { ThemedText } from "@/Components/ThemedText";
import { ThemedTextInput } from "@/Components/ThemedTextInput";
import { ThemedView } from "@/Components/ThemedView";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback ,Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

export default function ChangePassword() {
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <ThemedIcon onPress={() => router.push('/login')} name="chevron-back" useBorder/>
            <ThemedView style={styles.containerText}>
                <ThemedText type="title" style={styles.title}>Create Your New Password</ThemedText>
                <ThemedText type="default" lightColor={Colors.light.secondaryText} darkColor={Colors.dark.secondaryText}>Your new password must be different from previous password.</ThemedText>
            </ThemedView>
            <ThemedView>
                <ThemedTextInput placeholder='Password' iconName="lock-closed-outline" value={password} onChangeText={setPassword} secureTextEntry style={{ paddingLeft: 35 }}/>
                <ThemedTextInput placeholder='Password' iconName="lock-closed-outline" value={password} onChangeText={setPassword} secureTextEntry style={{ paddingLeft: 35 }}/>
                <ThemedView style={styles.row}>
                    <ThemedIcon name="checkmark-circle-outline" size={20} />
                    <ThemedText type="default" lightColor={Colors.light.tertiaryText} darkColor={Colors.dark.secondaryText}>Must not contain your name or email</ThemedText>
                </ThemedView>
                 <ThemedView style={styles.row}>
                    <ThemedIcon name="checkmark-circle-outline" size={20} />
                    <ThemedText type="default" lightColor={Colors.light.tertiaryText} darkColor={Colors.dark.secondaryText}>At least 8 characters</ThemedText>
                </ThemedView>
                 <ThemedView style={styles.row}>
                    <ThemedIcon name="checkmark-circle-outline" size={20} />
                    <ThemedText type="default" lightColor={Colors.light.tertiaryText} darkColor={Colors.dark.secondaryText}>Contains a symbol or a number</ThemedText>
                </ThemedView>
            </ThemedView>
            <ThemedView style={{ marginTop: 'auto', paddingBottom: 60 }}>
                <ThemedButton title='RESET PASSWORD' useGradient gradientStart={{x: 0, y:0}} gradientEnd={{ x: 1, y: 1}} onPress={() => router.replace('/')}></ThemedButton>
            </ThemedView>
        </ThemedView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '12%',
        paddingHorizontal: '8%',
    },
    containerText: {
        paddingTop: '19%',
        paddingBottom: '18%',
        gap: 10,
    },
    title: {
        fontSize: width * 0.1,
        lineHeight: width * 0.1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})