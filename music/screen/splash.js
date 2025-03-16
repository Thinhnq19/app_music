import { StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window");

const Splash = ({navigation}) => {
    return (
        <View style={styles.safeArea}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <LinearGradient colors={["#0F051D", "#311141"]} style={styles.splash_music}>
                <LottieView
                    source={require('../json/4F54LbmebQ.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                />
                <Text style={styles.title}>Getting Started</Text>
                <Text style={styles.subtitle}>Getting Started Getting</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homescreen')}>
                    <Text style={styles.buttonText}>Lets Go</Text>
                </TouchableOpacity>
                <Text style={styles.footer}>Spotifyclone</Text>
                <Text style={styles.footerSub}>BEST MUSIC APP</Text>
            </LinearGradient>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight * 0.35 : 10, // Chừa 50% hoặc 10 pixel
        backgroundColor: '#fff', // Màu nền phù hợp
    },
    splash_music: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
    },
    title: {
        fontSize: width * 0.08,
        fontWeight: "bold",
        color: "white",
        marginTop: height * 0.4
    },
    subtitle: {
        fontSize: width * 0.04,
        color: "#B0A6C0",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#a357ff",
        paddingVertical: width * 0.025,
        paddingHorizontal: width * 0.055,
        borderRadius: width * 0.02,
        marginTop: height * 0.02,
    },
    buttonText: {
        color: "white",
        fontSize: width * 0.04,
    },
    footer: {
        marginTop: width * 0.4,
        color: "#FFFFFF",
        fontSize: width * 0.08,
        fontWeight: "bold",
    },
    footerSub: {
        color: "#B0A6C0",
        fontSize: 12,
    },
    animation: {
        position: 'absolute', // Đặt animation lên trên
        width: width * 0.80, // 40% chiều rộng màn hình
        height: width * 0.46, // Tương ứng để giữ tỉ lệ
        zIndex: 1, // Đảm bảo animation nằm trên hình nền
        bottom: height * 0.7, // Tùy chỉnh khoảng cách từ đáy (40% chiều cao)
    },
})