import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async() => {
    try{  
        const token=await AsyncStorage.getItem('token'); 
        // console.log(token+ "token store");
        return token
      }  
      catch(error){  
        alert(error)  
      }  

}


export const setToken = (token) => {
    AsyncStorage.setItem("token",token)
}
