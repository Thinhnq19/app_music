import { StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Homescreen = () => {
    const songs = [
        { id: "1", title: "Back To Her Men", artist: "Demien Rice", image: "https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg", liked: false },
        { id: "2", title: "Hotling Bling", artist: "Billie Eilish", image: "https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg", liked: false },
        { id: "3", title: "Antretor", artist: "yann tiarsen", image: "https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg", liked: false },
        { id: "4", title: "Neghtmare", artist: "Halsey", image: "https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg", liked: false },
        { id: "5", title: "Get You The Moon", artist: "KINA", image: "https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg", liked: false },
    ];

    const [songList, setSongList] = useState(songs);

    const toggleLike = (id) => {
        setSongList((prevSongs) =>
            prevSongs.map((song) =>
                song.id === id ? { ...song, liked: !song.liked } : song
            )
        );
    };

    return (
        <View style={styles.safeArea}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <LinearGradient colors={["#0F051D", "#311141"]} style={styles.homescreen_music}>
                <View>
                    <View style={styles.search_imgmusic}>
                        <TouchableOpacity style={styles.music_text}>
                            <View style={styles.img_iconsearch}>
                                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3128/3128287.png' }} style={styles.img_search}></Image>
                            </View>
                        </TouchableOpacity>
                        {/* <TextInput style={styles.search_music}></TextInput> */}
                    </View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View>
                            <View style={styles.product_text}>
                                <Text style={styles.text_top}>recently played</Text>
                                <TouchableOpacity>
                                    <Text style={styles.text_seeall}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.product}>
                                <View style={styles.product_music}>
                                    <TouchableOpacity>
                                        <Image source={{ uri: 'https://images.genius.com/1c17251136bb1e55dea1f99e94ec87e2.1000x1000x1.jpg' }} style={styles.img_logo}></Image>
                                        <Text style={styles.text_music}>Dancing In The Dark</Text>
                                        <Text style={styles.text_casi}>SOOBIN</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.product_music}>
                                    <TouchableOpacity>
                                        <Image source={{ uri: 'https://i1.wp.com/plyric.com/thumbnail/nhat.jpg?w=250&h=250&strip=all&resize=250,250' }} style={styles.img_logo}></Image>
                                        <Text style={styles.text_music}>Dancing In The Dark</Text>
                                        <Text style={styles.text_casi}>SOOBIN</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.product_text}>
                                <Text style={styles.text_top}>recomMendAtion</Text>
                                <TouchableOpacity>
                                    <Text style={styles.text_seeall}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {songList.map((item) => (
                                        <View key={item.id} style={styles.item}>
                                            <TouchableOpacity style={styles.item_recommen}>
                                                <Image source={{ uri: item.image }} style={styles.item_img}></Image>
                                                <View style={styles.item_product}>
                                                    <Text style={styles.item_text}>{item.title}</Text>
                                                    <Text style={styles.item_casi}>{item.artist}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.item_icon} onPress={() => toggleLike(item.id)}>
                                                <AntDesign name={item.liked ? "heart" : "hearto"} size={23} color="rgba(215, 75, 75, 1)"></AntDesign>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight * 0.25 : 10, // Chừa 50% hoặc 10 pixel
        backgroundColor: '#fff', // Màu nền phù hợp
    },
    homescreen_music: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
    },
    music_text: {
        width: width * 0.00004,
    },
    search_imgmusic: {
        position: "absolute",
        top: 0,
        width: width * 0.08,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0)", // Làm trong suốt
        zIndex: 10,
    },
    search_music: {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        width: width * 0.7,
        height: height * 0.08,
        borderTopRightRadius: width * 0.02,
        borderBottomRightRadius: width * 0.02,
        color: 'white',
    },
    img_search: {
        width: width * 0.048,
        height: height * 0.04,
        resizeMode: 'center',
    },
    img_iconsearch: {
        backgroundColor: 'rgba(35, 45, 60, 0.68)',
        width: width * 0.23,
        height: height * 0.035,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.025,
        marginLeft: width * 0.70
    },
    product_text: {
        flexDirection: 'row',
        width: width * 0.88,
        height: height * 0.04,
        marginTop: height * 0.04,
        alignItems: 'center',
    },
    text_top: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        width: width * 0.46,
        marginLeft: width * 0.046,
        fontSize: width * 0.046
    },
    text_seeall: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginLeft: width * 0.25
    },
    product: {
        flexDirection: 'row',
        marginTop: height * 0.02,
    },
    product_music: {
        width: width * 0.48,
        height: height * 0.32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_logo: {
        width: width * 0.46,
        height: height * 0.23,
        borderRadius: width * 0.02,
        resizeMode: 'stretch'
    },
    text_music: {
        color: 'white',
        marginTop: height * 0.025
    },
    text_casi: {
        color: 'rgba(255, 255, 255, 0.4)',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: width * 0.020,
        marginLeft: width * 0.025
    },
    item_recommen: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_img: {
        width: width * 0.23,
        height: height * 0.15,
        borderRadius: width * 0.035
    },
    item_product: {
        marginLeft: width * 0.032,
        width: width * 0.46
    },
    item_text: {
        color: 'white',
        fontSize: width * 0.046,
        textTransform: 'capitalize',
    },
    item_casi: {
        color: 'rgba(255, 255, 255, 0.4)',
        marginTop: height * 0.025,
    },
    item_icon: {
        marginLeft: width * 0.088,
    }
})