import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SECONDARYCOLOR, PRIMARYCOLOR, WHITECOLOR } from '../constants/appConstants';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScanBoardingPass from '../views/ScanBoardingPass';
import ShareJourneyDetails from '../views/ShareJourneyDetails';
import KnowBankOffers from '../views/KnowBankOffers';
import MyBookings from '../views/MyBookings';
import BoardingPassPartners from '../views/BoardingPassPartners';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ScanBoardingPassStack=() =>{
  return (
    <Stack.Navigator
      initialRouteName="ScanBoardingPass"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="ScanBoardingPass"
        component={ScanBoardingPass} />
         <Stack.Screen
        name="BoardingPassPartners"
        component={BoardingPassPartners} />
     
    </Stack.Navigator>
  );
}

const ShareJourneyDetailsStack=() =>{
  return (
    <Stack.Navigator
      initialRouteName="ShareJourneyDetails"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ShareJourneyDetails"
        component={ShareJourneyDetails} />
      
    </Stack.Navigator>
  );
}
const KnowBankOffersStack=() =>{
  return (
    <Stack.Navigator
      initialRouteName="KnowBankOffers"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="KnowBankOffers"
        component={KnowBankOffers} />

    </Stack.Navigator>
  );
}
const MyBookingsStack=() =>{
  return (
    <Stack.Navigator
      initialRouteName="MyBookings"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MyBookings"
        component={MyBookings} />

    </Stack.Navigator>
  );
}

const Routes=() =>{
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: PRIMARYCOLOR },
          headerTintColor: WHITECOLOR,
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: SECONDARYCOLOR,
          tabBarInactiveTintColor: WHITECOLOR,
          tabBarActiveBackgroundColor:PRIMARYCOLOR,
          tabBarInactiveBackgroundColor:PRIMARYCOLOR,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'ScanBoardingPassStack') {
              iconName = 'qrcode';
            } else if (route.name === 'ShareJourneyDetailsStack') {
              iconName= 'airplane';
            }     else if (route.name === 'KnowBankOffersStack') {
              iconName = 'offer';
            }
            else if (route.name === 'MyBookingsStack') {
                iconName =  'book-account';
              }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="ScanBoardingPassStack"
          component={ScanBoardingPassStack}
          options={{
            tabBarLabel: 'Scan Boarding Pass',
            title: 'Scan Boarding Pass',
            
          }} />
        <Tab.Screen
          name="ShareJourneyDetailsStack"
          component={ShareJourneyDetailsStack}
          options={{
            tabBarLabel: 'Share Journey Details',
            title: 'Share Journey Details'
          }} />
        <Tab.Screen
          name="KnowBankOffersStack"
          component={KnowBankOffersStack}
          options={{
            tabBarLabel: 'Know Bank Offers',
            title: 'Know Bank Offers',
          }} />
        <Tab.Screen
          name="MyBookingsStack"
          component={MyBookingsStack}
          options={{
            tabBarLabel: 'My Bookings',
            title: 'My Bookings',
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Routes;