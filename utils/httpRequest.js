import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function fetchWebApi(endpoint) {
    try {
        const accessToken = await AsyncStorage.getItem("token");
        if(accessToken) {
            const response = await axios.get(`https://api.spotify.com/${endpoint}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
               
                
            });
          
                const data = await response.data;
                return data;

            
        }
        
    } catch (error) {
        console.log(error)
    }
}