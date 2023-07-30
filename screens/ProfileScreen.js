import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchWebApi } from "../utils/httpRequest";
import HeaderText from "../components/Header/HeaderText";
import { EvilIcons } from "@expo/vector-icons";
import ModeButton from "../components/Buttons/ModeButton";


const ProfileScreen = () => {
  const [userProfile, setUserProfile] = useState(null);
  const getProfile = async () => {
    console.log("hi");
    try {
      const data = await fetchWebApi("v1/me");
      setUserProfile(data);
      console.log("====================================");
      console.log("data", data);
      console.log("====================================");
      return data;
    } catch (error) {
      console.log("error my friend", error.message);
    }
  };
  
  useEffect(() => {
    getProfile();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <HeaderText bgText={{ backgroundColor: "#333" }} children="Profile" />
      <View style={styles.infoContainer}>
        {userProfile?.images?.length > 0 ? (
          <Image
            source={{ uri: userProfile?.images[0].url }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
        ) : (
          <EvilIcons name="user" size={80} color="white" />
        )}
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 28,
            marginVertical: 10,
            fontFamily: "montserrat-bold",
          }}
        >
          {userProfile?.display_name}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "montserrat",
          }}
        >
          {userProfile?.email}
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontFamily: "montserrat",
            }}
          >
            Followers
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: "montserrat-bold",
            }}
          >
            {userProfile?.followers?.total}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* TODO Add posts and comments section here */}    
            <ModeButton children="Find Friend" icon='person-add' size={30} color='white' iconStyle={{
                marginVertical: 10
            }} 

            />
            <ModeButton children="Share" icon='shuffle-outline' size={30} color='white'
            iconStyle={{
                marginVertical: 10
            }} 

            />
      </View>
      <View 
        style={
            {
                width: '100%',
                height: 20,
                backgroundColor: '#333',
                borderRadius: 8,
                elevation: 8,
                shadowColor: "black",
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.5,
                shadowRadius: 8
            }
        }
            
      />
      <View>
        
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  infoContainer: {
    backgroundColor: "#333",
    paddingBottom: 30,
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 64,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 14,
    marginHorizontal: 60,
    alignItems: 'center',
    justifyContent:'space-around',
    columnGap: 30
  },
});
