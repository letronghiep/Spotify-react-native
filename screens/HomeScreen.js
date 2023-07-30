import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fetchWebApi } from "../utils/httpRequest";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/Header/HomeHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlbumItem from "../components/albums/AlbumItem";
import EpisodeItem from "../components/albums/EpisodeItem";
import ListItem from "../components/ListItem";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [episodes, setEpisodes] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    async function getTopTracks() {
      try {
        console.log("Hello world");

        const data = await fetchWebApi("v1/me/playlists");
        
        setPlaylists(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getTopTracks();
  }, []);

  // useEffect(() => {
  //   async function getRecentPlayed() {
  //     try {
  //       const data = await fetchWebApi("v1/me/player/currently-playing");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getRecentPlayed();
  // }, []);
  useEffect(() => {
    async function getEpisodes() {
      try {
        console.log("Alooo");
        const data = await fetchWebApi("v1/me/episodes");
        console.log("Episode", data.items);
        const episode = data.items;
        setEpisodes(episode);
      } catch (error) {
        console.log(error);
      }
    }
    getEpisodes();
  }, []);
  function searchHandler() {}
  async function settingHandler() {
    await AsyncStorage.removeItem("token");
    navigation.navigate("StartedNavigation");
  }
  const renderEpisodes = ({ item }) => <EpisodeItem episode={item.episode} />
  const renderPlaylists = ({ item }) => <AlbumItem item={item} />
  return (
    <SafeAreaView style={styles.rootScreen}>
      <HomeHeader
        leftIcon="search-outline"
        size={26}
        color="white"
        rightIcon="settings-sharp"
        onSearch={searchHandler}
        onSettings={settingHandler}
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 20,
            marginLeft: 20,
          }}
        >
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.textButton}>Music</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.textButton}>Podcasts & Shows</Text>
          </Pressable>
        </View>
        {/* Recently played */}
        {/* Episodes */}
        <ListItem listTitle="Episodes for you" dataList={episodes} renderItem={renderEpisodes} />
        {/* Top mixes */}
        <ListItem listTitle="Your top mixes" dataList={playlists} renderItem={renderPlaylists} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#333",
  },
  textButton: {
    color: "white",
  },
  pressed: {
    opacity: 0.8,
  },
});
