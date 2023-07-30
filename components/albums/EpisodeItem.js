import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const EpisodeItem = ({episode}) => {
    const {images, name, description} = episode
  return (
    <Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <View>
        <Image source={{uri: images[1]?.url}} style={{
            width: images[1]?.width / 2,
            height: images[1]?.height / 2,
            resizeMode: 'contain',
            borderRadius: 16
        }} />
        <Text style={{
            color: 'white',
            maxWidth: images[1].width / 2,
            fontSize: 16,
            fontFamily: 'montserrat-bold',
            marginTop: 14,
            marginBottom: 8,
            
        }}
        numberOfLines={1}
        >{name}</Text>
        <Text style={{
            color: '#ccc',
            maxWidth: images[1].width / 2,
            fontSize: 14,
            fontFamily: 'montserrat'
            
        }}
        numberOfLines={1}
        >{description}</Text>
      </View>
    </Pressable>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
     pressed:{
    opacity: 0.8
  }
});
