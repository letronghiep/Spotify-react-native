import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({listTitle, dataList, renderItem}) => {
  return (
    <View>
      <Text
            style={{
              color: "white",
              marginVertical: 24,
              fontFamily: "montserrat-bold",
              fontSize: 25,
              marginHorizontal: 20,
            }}
          >
            {listTitle}
          </Text>
          {dataList.length > 0 && (
            <FlatList
              data={dataList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({})