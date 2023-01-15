import { decode } from 'bcbp';
import React from 'react';
import { TouchableOpacity, Text, Linking, View, Image} from 'react-native';
import Route from './src/routes/routes';
import { useEffect } from 'react';
import { loginUser } from './src/helpers/api/loginUser';
// import { boardingPassPartners } from './src/helpers/api/boardingPassPartners';


const App = () => {
  useEffect(() => {
    loginUser()
  }, [])
  return (
    
    
<Route/>
    
  );
};
export default App;