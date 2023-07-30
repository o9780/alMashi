import React,{ useEffect, useRef } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const LocationText2=()=>{
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
    height:39,
    }
    ,container:{width:320, left:40, top:110, position:'absolute'}}}
    ref={ref}
    placeholder="Where to ?"
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
    }}
    query={{
      key: 'AIzaSyBpNcXfkMi4nIOpFvAXv-6EQmknnswzOuo',
      language: 'Ar',
    }}
  />
);
};
  
export default LocationText2;