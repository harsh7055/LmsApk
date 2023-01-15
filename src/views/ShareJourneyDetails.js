import * as React from 'react';
import { searchAirport } from '../helpers/api/searchAirport'
import { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import axios from "axios";
import { getToken } from "../utils/tokenStore";


const ShareJourneyDetails = ({ navigation,route }) => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [resFrom, setresFrom] = useState([])
  const [resTo, setresTo] = useState([])

  const callApi=async(loc)=>{
   
    var data = {
      "keyword": loc
  };

  var config = {
      method: 'post',
      url: 'http://10.0.2.2:3005/api/booking/airport/search/name',
      headers: {
          'Authorization': "Bearer " + await getToken(),
          'Content-Type': 'application/json'
      },
      data: data
  };

  try {
      const res = await axios(config)
      console.log(JSON.stringify(res.data.result.airports));
      // setresFrom( JSON.stringify(res.data.result.airports))
      // setresFrom(['hello','jassi','harsh'])
      // console.log(resFrom + "///////");

  }

  catch (error) {
      console.log(error)
  };
   
  }
  
//  if(from!="")
//  {
  useEffect(() => {
    console.log(resFrom + ">>>>>>>>>>>");
   callApi(from);
    },[from])
//  }

  
  // useEffect(() => {
  //   // searchAirport(to)
  //   console.log("call use to");
  // }, [to])
  return (
    <SafeAreaView style={{ backgroundColor: "#68438b", flex: 1, }}>
      <TextInput onChangeText={(from) => setFrom(from)} value={from} style={{ backgroundColor: "white", width: "50%", padding: "2%", margin: "5%" }} placeholder='From' />
      {/* {
       (resFrom==[]||resFrom==undefined)?<Text></Text>:( resFrom.map((ele)=>
       <Text>{ele.airportName}</Text>
       ))
      } */}
      <TextInput onChangeText={(to) => setTo(to)} value={to} style={{ backgroundColor: "white", width: "50%", padding: "2%", margin: "5%" }} placeholder='To' />
      <TouchableOpacity style={{ backgroundColor: "#18c3d3", width: "50%", padding: "2%", margin: "5%", alignItems: "center" }} >
        <Text>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Button: {
    width: "20%",
    backgroundColor: "red"
  }
});
export default ShareJourneyDetails;