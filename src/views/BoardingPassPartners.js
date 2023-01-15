import { decode } from 'bcbp';
import React ,{useState,useEffect} from 'react'
import { Text, View } from 'react-native'
import { boardingPassPartners } from '../helpers/api/boardingPassPartners';
import { getToken } from '../utils/tokenStore';
import axios from 'axios';

export default function BoardingPassPartners({ navigation, route}) {
  const [lounges, setlounges] = useState([])
  const [flag, setflag] = useState(false)
  // let response=[];

  // setlounges(()=>boardingPassPartners());
 const getAPI=async()=>{
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
      'Authorization': "Bearer " + await getToken(),
      'Content-Type': 'application/json'
  },
  data: data
};

try {
  const res = await axios(config)
  console.log(JSON.stringify(res.data.result.lounges[0].lounges) + "API END CALL");
  // return JSON.stringify(res)
  setlounges(JSON.stringify(res))
  console.log(lounges+"after set ")
// setflag(true)
}

catch (error) {
  console.log(error)
};

}
useEffect(()=>{
  getAPI();
},[])
console.log(lounges.data +"API CALL FROM LOUNGES");

  return (
    <View>
      {(flag==true)?
        (lounges.data.result.lounges[0].lounges.map((e)=>{
           <Text>{e.name}</Text>
        }))
      :<Text>False</Text>}
    <Text>shsdhbdfbnbjbjbb</Text>
    </View>
  )
}
