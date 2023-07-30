import MainTextField from '../component/mainTextField';
import { View ,Image,TouchableOpacity,Text} from 'react-native'
import React, {useState}from 'react'
import Edit_temp from './edit_temp';
import Styles from '../styles';
import SignInLabel from '../component/sign_in_label';
import MainButton from '../component/mainButton';
import Dropdown from '../component/drop_down';
import ImagePicker from 'react-native-image-crop-picker';

const ViewProfile =()=> {
  var path =""
  async function pickImage() {
    try {
        const image = await ImagePicker.openPicker({
            width: 50,
            height: 50,
            cropping: true,
        });
        console.log(image.path);
        path=image.path
        console.log(path)
        
                // do something with the image data
    } catch (err) {
        console.log(err);
    }
    
  }
  const [selectedItem, setSelectedItem] = useState();
  

  const class_data= [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 },
  ];

  const car_data= [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 },
    { text: 'Option 4', value: 4 },
    { text: 'Option 5', value: 5 },
  ];
  return (
    
    <Edit_temp
    
    SignInLabel={
        <View>
        <SignInLabel stylel={Styles.title_screen} label={"Profile"} />
        <SignInLabel stylel={[Styles.title_screen,{left:30,marginTop:35,fontSize:22}]} label={"Personal Info"} />
        <SignInLabel stylel={[Styles.title_screen,{left:30,marginTop:160,fontSize:22}]} label={"Car Info"} />
        </View>
        
    }

    MainTextField={
        <View>
        <MainTextField textInput={[Styles.textInput, {position: "absolute"},{top:-25},{fontSize:18}]} text={"Full Name"}/>
        <MainTextField textInput={[Styles.textInput,{position: "absolute"}, {top:15},{fontSize:18}]} text={"Mobile No."} type={'numeric'}/>
        <MainTextField textInput={[Styles.textInput, {position: "absolute"},{top:120},{fontSize:18}]} text={"Plate Number"}/>
        <MainTextField textInput={[Styles.textInput, {position: "absolute"},{top:280},{fontSize:18}]} text={"Type"}/>
        <MainTextField textInput={[Styles.textInput, {position: "absolute"},{top:330},{fontSize:18}]} text={"Color"}/>
        </View>

      }
      MainButton={<MainButton buttonStyle={[Styles.signButtonStyle,{top:533}]}button={"Save"}/>}

      Dropdown={
        <View>
        <Dropdown fun={value => setSelectedItem(value)} value={selectedItem} adata={class_data} box={[Styles.textInput,{top:130,height:40,position: "absolute",left:20}]} text={{marginTop:250,height:150,left:20}}/>
        <Dropdown fun={value => setSelectedItem(value)} value={selectedItem} adata={car_data} box={[Styles.textInput,{top:185,height:40,position: "absolute",left:20}]} text={{marginTop:300,height:150,left:20}}/>
        </View>
      }
      Img={
        <View>
         <TouchableOpacity onPress={pickImage}>
             <Text style={{backgroundColor:"green" ,top:-150,left:-150}}>Attach Photo</Text>
            </TouchableOpacity>
      <Image style={{width:50,height:50,backgroundColor:"gray",borderRadius:50,bottom:90,left:170,borderColor:"#fff",borderWidth:1}} source={{uri:path}}/>
      
      </View>
    }
      



>
  
    </Edit_temp>
    
  );
};


export default ViewProfile;