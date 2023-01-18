import { decode } from 'bcbp';
import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { boardingPassPartners } from '../helpers/api/boardingPassPartners';
import { getToken } from '../utils/tokenStore';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BoardingPassPartners({ navigation, route }) {
  const [lounges, setLounges] = useState([])
  const [flag, setflag] = useState(false)
  // let response=[];

  // setlounges(()=>boardingPassPartners());

  // useEffect(() => {
  //   const postparams = { userList: result };
  //   axios
  //     .get(environment._urlPosts, { headers, params: postparams })
  //     .then(posts => {
  //       // storing response data in array
  //       setPostArray(posts.data.post);

  //       console.log(post);
  //     })
  //     .catch(err => {});
  // }, []);

  useEffect(() => {
    const getAPI = async () => {
      //  let response= await boardingPassPartners();
      //   setlounges(response);
      //   setflag(true)
      var data = JSON.stringify({
        "from": "KOS",
        "to": "PEN"
      });

      var config = {
        method: 'post',
        url: 'http://10.0.2.2:3005/api/booking/lounges/search/airport',
        headers: {
          'Authorization': "Bearer " + await AsyncStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        data: data
      };
      console.log(JSON.stringify(config) + " CONFIG DATA");

      try {
        const res = await axios(config)
        console.log(JSON.stringify(res.data.result.lounges));
        // const data = await res.json();
        setLounges(res.data.result.lounges)
        // console.log(lounges +"DATA");

        // const data= JSON.stringify(res.data)
        // console.log(data + " Data");
        // console.log(JSON.stringify(res.data.result.lounges[0].lounges) + "API END CALL");
        // // return JSON.stringify(res)
        // console.log(lounges+" after set ")
        setflag(true)
      }

      catch (error) {
        console.log(error)
      };

    }
    getAPI();
  }, [])
  console.log(JSON.stringify(lounges) + "DATA");


  // console.log(lounges +"API CALL FROM LOUNGE
  lounges.map(res => {
    console.log(JSON.stringify(res.lounges.map((item) => {
      console.log(item.name);
    })) + "data kesa he")
  })

  // lounges.map(res=>{
  //   res.lounges.map(item=>{
  //     <Text>{item.name}</Text>
  //   })
  // })
  return (
    <View style={styles.container}>
      {lounges.map(res => (
        res.lounges.map((item) => {
          return (
            <View style={styles.container}>
              <View style={styles.box} >
                <View style={styles.leftContainer}>
                  {/* <Image source={{ uri: item.photos[0] }}
              style={{ width: "100%", height: 180, borderTopLeftRadius: 15, borderTopRightRadius: 15, resizeMode: 'cover' }} /> */}
                </View>
                <View style={styles.rightContainer}>
                  <View style={styles.descriptionBox}>
                    <Text style={styles.description}>{item.name}</Text>
                    <Text style={styles.offer}>Capacity: {item.capacity}</Text>
                  </View>
                  <View style={styles.readmoreBox}>
                    <TouchableOpacity style={styles.ReadMoreButton}>
                      <Text style={styles.ReadMoreText}>Read More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

          )


        }

        )
      ))}
      <Text>
      </Text>
    </View>
  )

}
const styles = StyleSheet.create({
  offer: {
    fontSize: 14,
  },
  leftContainer: {
    marginBottom: 5

  },
  readmoreBox: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center"
  },
  descriptionBox: {
    width: "60%",
    textAlign: "justify",
    padding: 5
  },
  rightContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: "2%"
  },
  box: {
    width: "97%",
    borderWidth: 2,
    borderColor: '#721b46',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    margin: 5,
    flexDirection: 'column',
    justifyContent: "space-between",
    borderColor: "grey",
    // maxHeight:350
  },
  description: {

    fontSize: 18,
    marginBottom: "2%",
    color: 'black',
    fontWeight: 'bold',


  },
  container: {
    backgroundColor: 'white',
    height: "50%",
    padding: '5%',
    overflow:"scroll"

  },
  ReadMoreButton: {
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#721b46",
    textAlign: "center",

  }
  , ReadMoreText: {
    textAlign: "center",
    color: "#721b46",
    margin: 5,
    fontSize: 15
  }
});

