import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import Styles from '../styles';

const Rate = ({text,st}) =>{
    const [DefaultRate, setDefaultRate] = useState(2)
    const [MaxRate, setMaxRate] = useState([1, 2, 3, 4, 5])
    //imges
    const StarFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const UnfilledStar = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const Rating = () =>{
        return(
            <View style={Styles.customRating}>
              <Text style={st}>{text}</Text>
              
                {
                MaxRate.map((item, key) => {
                    return(    
                        <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setDefaultRate(item)}>
                            <Image style={Styles.starImageStyle} source={item<= DefaultRate ? {uri: StarFilled} : {uri:UnfilledStar}}/>
                        </TouchableOpacity>
                          );
                                           })
                 }
            </View>
        );
    }

return(
    <SafeAreaView style = {Styles.continer}>
        <Rating/>
        {/* to write the rates in the format 1/5 ... */}
        {/* <Text style = {Styles.textStyle}>{DefaultRate + '/' + MaxRate.length}</Text>  */}
    </SafeAreaView>
);
}
    export default Rate;