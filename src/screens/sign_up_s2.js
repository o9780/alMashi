import React,{useState} from 'react';
import { View } from 'react-native';
import MainPageSign from './main_page_sign';
import Styles from '../styles';
import MainButton from '../component/mainButton';
import MainTextField from '../component/mainTextField';
import SignInLabel from '../component/sign_in_label';
import Dropdown from '../component/drop_down';

const SignUp_2 = () => {
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
    <MainPageSign
      SignInLabel={
        <View>
          <SignInLabel stylel={Styles.label} label={"Already have an account?"} style={Styles.screen} screen={"Sign in"} />
          <SignInLabel stylel={[Styles.title_screen, { top: 15 }]} label={"Create Account"} />
          <SignInLabel stylel={[Styles.title_screen, { fontSize: 18 }]} label={"Please fill the information below"} />
        </View>
      }

      MainButton={<MainButton buttonStyle={[Styles.signButtonStyle, { top: 380 }]} button={"Sign Up"} />}

      MainTextField={
        <View>
          <MainTextField textInput={[Styles.textInput, { position: "absolute" }, { top: -90 }, { fontSize: 16 }]} text={"Plate Number"} />
          <MainTextField textInput={[Styles.textInput, { position: "absolute" }, { top: 70 }, { fontSize: 16 }]} text={"Color"} />
          <MainTextField textInput={[Styles.textInput, { position: "absolute" }, { top: 120 }, { fontSize: 16 }]} text={"Type"} />
        </View>
      }

      Dropdown={
        <View>
        <Dropdown fun={value => setSelectedItem(value)} value={selectedItem} adata={class_data} box={[Styles.textInput,{top:30,height:40,position: "absolute",left:20}]} text={{marginTop:180,height:150,left:20}}/>
        <Dropdown fun={value => setSelectedItem(value)} value={selectedItem} adata={car_data} box={[Styles.textInput,{top:-30,height:40,position: "absolute",left:20}]} text={{marginTop:120,height:150,left:20}}/>
        </View>
      }


    >


    </MainPageSign>


  );
}




export default SignUp_2;