import React, { useState } from 'react';
import { View , Alert} from 'react-native';
import MainPageSign from './main_page_sign';
import Styles from '../styles';
import MainButton from '../component/mainButton';
import MainTextField from '../component/mainTextField';
import SignInLabel from '../component/sign_in_label';
import Check_box from '../component/check_box';

const SignUp = () => {
  const [isChecked, setChecked] = useState(false);


  return (
    <MainPageSign


      MainTextField={
        <View>
          <MainTextField textInput={Styles.textInput} text={"Full Name"} />
          <MainTextField textInput={[Styles.textInput, { marginTop: "50%" }]} text={"Mobile No."} type={'numeric'} />
        </View>
      }


      MainButton={<MainButton buttonStyle={Styles.signButtonStyle}
        button={isChecked?"Continue":"Sign up"}/>}



      SignInLabel={
        <View>

          <SignInLabel stylel={Styles.label} label={"Already have an account?"} style={Styles.screen} screen={"Sign in"} />
          <SignInLabel stylel={Styles.title_screen} label={"Create Account"} />
          <SignInLabel stylel={[Styles.title_screen, { fontSize: 18 }, { top: 45 }]} label={"Please fill the information below"} />
        </View>
      }

      Check_box={
        <Check_box style_box={Styles.check_box_style}
          label={"I Own a Car"}
          style_text_box={Styles.check_box_label}
          value={isChecked}
          fun={() => setChecked(!isChecked)} />
      }


    >

    </MainPageSign>

  );
}




export default SignUp;

