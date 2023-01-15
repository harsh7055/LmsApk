// import * as React from 'react';
import React, { Component, Fragment,useState,useEffect } from 'react';

import { PRIMARYCOLOR, SECONDARYCOLOR, WHITECOLOR } from '../constants/appConstants';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner'
import { decode } from 'bcbp';
import { boardingPassPartners } from '../helpers/api/boardingPassPartners';



const ScanBoardingPass = ({ navigation }) => {
  // const [arrivalAirport,setArrivalAirport]= useState("");
  // const [departureAirport, setDepartureAirport] = useState("")

 
  // console.log("jassi");
  const onSuccess = (e) => {
    let data=e.data
    // console.log(data);

    
    // console.log(e);
    let output=decode(e.data);
    // console.log(output);
    let passData=output.data.legs;
    // console.log(JSON.stringify(passData) );
    passData.map((element)=>{
    // console.log(element.arrivalAirport);
    // console.log(element.departureAirport);
    // setArrivalAirport(element.arrivalAirport);
    // setDepartureAirport(element.departureAirport);
    
    // console.log(element.airlineInfo);
    // console.log(element.airlineNumericCode);
    // console.log(element.flightNumber);

    })
      
      // console.log(boardingPassPartners());

    navigation.navigate('BoardingPassPartners')

    // console.log(passData.arrivalAirport);
    // console.log(output);

    // output.data.legs.map((ele)=>{
    //   console.log(ele);
    // })
    // console.log(output.data.arrivalAirport);
    // console.log(output.data.legs.departureAirport);
    // console.log(output.data.legs.arrivalAirport);

}


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITECOLOR }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <QRCodeScanner 
              reactivate={false}
              showMarker={true}
              onRead={onSuccess}
              topContent={
                  <Text style={styles.centerText}>
                     Please move your camera {"\n"} over the QR Code
                  </Text>
              }
             />
          
         
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default ScanBoardingPass;