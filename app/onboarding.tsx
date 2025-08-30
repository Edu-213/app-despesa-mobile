import React from "react";
import { Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedText } from "@/Components/ThemedText";
import { ThemedView } from "@/Components/ThemedView";

const slides = [
    {
        key: "one",
        title: "Note Down Expenses",
        text: "Daily note your expenses to help manage money",
        image: require("../assets/images/illustration.png")
    },
    {
        key: "two",
        title: "Simple Money Management",
        text: "Get notifications or alerts when you overspend",
        image: require("../assets/images/illustration-2.png")
    },
    {
        key: "three",
        title: "Easy to Track and Analyze",
        text: "Tracking your expenses helps make sure you don’t overspend",
        image: require("../assets/images/illustration-3.png")
    },
]

export default function Onboarding() {
  return (
    <AppIntroSlider data={slides} renderItem={({item }) => (
        <ThemedView style={style.Container}>
            <Image source={item.image} resizeMode="contain"/>
            <ThemedText type="title">{item.title}</ThemedText>
            <ThemedText type="default" lightColor="#6B7580" darkColor="#B0B8BF" style={style.subtitleText}>{item.text}</ThemedText>
        </ThemedView >
    )}
    onDone={async () => {
        await AsyncStorage.setItem("onboardingSeen", "true");
        router.replace("/login")
    }}
    renderNextButton={() => (
    <ThemedView lightColor="#FFF" darkColor="#FFF" style={style.buttonCircle}>
        <Icon name="arrow-forward" color="rgba(255, 255, 255, .9)" size={24}/>
    </ThemedView>)}

    renderDoneButton={() => (
        <ThemedView lightColor="#FFF" darkColor="#FFF" style={style.buttonCircle}>
            <Icon name="checkmark" color="rgba(255, 255, 255, .9)" size={24}/>
        </ThemedView>)}
    >
    </AppIntroSlider>
  )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitleText: {
        textAlign: 'center',
    },

    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})