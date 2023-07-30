import React,{ useEffect, useRef } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const LocationText=()=>{
const ref = useRef();
useEffect(() => {
  ref.current?.setAddressText('');
}, []);

return (
  <GooglePlacesAutocomplete 
  styles={{textInput:
    {backgroundColor:'white',
     borderRadius:7,
     borderWidth:0.5,
    height:39}
    ,container:{width:320, left:40, top:60, position:'absolute'}}}
    ref={ref}
    placeholder="Departure"
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
    }}
    query={{
      key: 'AIzaSyA297ctnh59E7h3WCreCc7SUhRw9gVhP0A',
      language: 'Ar',
    }}
  />
);
};
  
export default LocationText;