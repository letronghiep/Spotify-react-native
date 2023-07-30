import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlbumItem = ({item}) => {
  const {name, id, images, description} = item;
  const extractTextFromHTML = (html) => {
    // Regular expression to extract the text between <a> tags
    const regex = /<a[^>]*>([^<]+)<\/a>/g;
    const matches = [];
    let match;
  
    while ((match = regex.exec(html))) {
      matches.push(match[1]);
    }
    console.log('====================================');
    console.log(matches);
    console.log('====================================');
    return matches.join(', ');
  };
  const extractedText = extractTextFromHTML(description);
  return (
    <Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <View>
        <Image source={{uri: images[0]?.url}} style={{
          height: 160,
          width: 160,
          resizeMode: 'cover'
        }} />
        <Text numberOfLines={2} style={styles.des}>{extractedText}</Text>
      </View>
    </Pressable>
  )
}

export default AlbumItem

const styles = StyleSheet.create({
  container: {
    // flex: 1
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    elevation: 8
  },
  des: {
    color: '#ccc',
    maxWidth: 160,
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'montserrat'
  },
  pressed:{
    opacity: 0.8
  }
})