import { StyleSheet } from 'react-native'


const Styles = StyleSheet.create({

  signButtonStyle: {
    elevation: 5,
    backgroundColor: "#22A699",
    borderRadius: 10,
    paddingTop: "2.5%",
    marginBottom: "7.5%",
    width: "25%",
    top: 400,
    textAlign: "center",
    marginLeft: "28%",
    fontSize: 25,
    color: "white",
    position: 'absolute'
    },

  textInput: {
    paddingBottom:0,
    borderBottomColor: "#6f6565",
    borderBottomWidth: 1,
    height:20,
    fontSize: 22,
    paddingLeft: 8,
    width: "80%",
    alignSelf: "center",
    marginTop: "35%",
    position: "absolute",
    fontFamily: 'TextMeOne-Regular',
    width:345
  },

  label: {
    fontSize: 18,
    top: 520,
    left: 60,
    color: "#6f6565",
    justifyContent: "center",
    position:"absolute"



  },

  screen: {
    fontSize: 18,
    top: 520,
    left: 275,
    color: "#22A699",
    fontWeight: "bold",
    position: "absolute"

  },

  title_screen: {
    fontSize: 28,
    top: 28,
    justifyContent: "center",
    alignSelf: "center",
    color: "#6f6565",
    position: "absolute",

  },

  check_box_style: {
    justifyContent: "center",
    alignSelf: "center",
    top: 320,
    right:120,
  },

  check_box_label: {
    fontSize:20,
    justifyContent: "center",
    alignSelf: "center",
    top: 322,
    right:195,
    position:"absolute"

  },

  dropdown2BtnStyle: {
    position:"absolute",
    width: 300,
    height: 55,
    borderColor: '#FFDE59',
   backgroundColor: '#FFDE59',
   opacity:'0.5',
    borderRadius: 50,
    transform: [{ translateX: 42 }, { translateY: 480}],
  },

  dropdown2BtnTxtStyle: {
   
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

  },
  dropdown2DropdownStyle: {
    position:"absolute",
    backgroundColor: '#EAEAEA',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  
  },

  dropdown2RowStyle: {
    backgroundColor: '#EAEAEA',
     borderBottomColor: '#848484'
     },

  dropdown2RowTxtStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  feeling :{
    fontSize:22, 
    textTransform: 'capitalize', 
    left: 29, top:23,
  },

  radioButoon:{
    left:210, 
    bottom:250, 
    alignitem: 'center', 
    marginTop:-18
  },
    

  Wrapper:{
    flexDitrction:'row',
    top:250,
  
},

  innerRadioButtonCircle:{
    width: 13, 
    height:13,
    backgroundColor: 'grey', 
    borderRadius: 10,
     left:1.2,
    },

  outter:{
    width: 17, 
    height:17, 
    borderWidth: 1, 
    borderRadius: 15,
     justifyContent: 'center',
      alighItems: 'center',
    },

  continer:{
    flex:1, 
    justifyContent: 'center',
     alighItems:'center'
     
    },

    card_style:{
      padding: 10, margin: 10 ,height:80,top:30, elevation:5,borderColor:"#6f6565",borderWidth:0.2,left:10
    },
    customRating:{justifyContent: 'center', flexDirection: 'row', top: 10, position:'absolute',Alignself:'center'},
  container:{flex:1, justifyContent:'center', position:'absolute', Alignself: 'center' },
  textStyle:{textAlign: 'center', fontSize: 23, marginTop: 20, justifyContent: 'center', Alignself:'center'},
  starImageStyle:{width: 43, height: 43, marginRight:15, left:55, top:135, resizeMode:'cover',justifyContent: 'center', Alignself:'center'},
  text:{top:30,left:73,fontSize:35,position:'absolute',color:"#22A699", justifyContent:'center', alignSelf:'center'},
  text2:{top:30,left:110,fontSize:35,position:'absolute',color:"#22A699", justifyContent:'center', alignSelf:'center'},




});

export default Styles;