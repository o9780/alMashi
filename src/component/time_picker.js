// import React, {useState} from 'react';
// import {View, Platform,TouchableOpacity, Image} from 'react-native';
// import TimePicker from '@react-native-community/datetimepicker';

// const Time = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);
//   console.log(date)

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = currentMode => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={showTimepicker}>
//         <Image source={require("C:/Users/o1000/Desktop/proj/src/assist/time_logo.png")}/>
//       </TouchableOpacity>
//       {show && (
//         <TimePicker
//           testID="TimePicker"
//           timeZoneOffsetInMinutes={0}
//           value={date}
//           mode={mode}
//           is24Hour={false}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// export default Time;
// import  React from 'react'
// import { Button } from 'react-native-paper'
// import { TimePickerModal } from 'react-native-paper-dates'

// export default function TimePickerPage() {
//   const [visible, setVisible] = React.useState(false)
//   const onDismiss = React.useCallback(() => {
//     setVisible(false)
//   }, [setVisible])

//   const onConfirm = React.useCallback(
//     ({ hours, minutes }) => {
//       setVisible(false);
//       console.log({ hours, minutes });
//     },
//     [setVisible]
//   );


//   return (
//     <>
//       <TimePickerModal
//         visible={visible}
//         onDismiss={onDismiss}
//         onConfirm={onConfirm}
//         hours={12} // default: current hours
//         minutes={14} // default: current minutes
//         label="Select time" // optional, default 'Select time'
//         cancelLabel="Cancel" // optional, default: 'Cancel'
//         confirmLabel="Ok" // optional, default: 'Ok'
//         animationType="fade" // optional, default is 'none'
//         locale={'en'} // optional, default is automically detected by your system
//       />
//       <Button onPress={()=> setVisible(true)}>
//         Pick time
//       </Button>
//     </>
//   )
// }

import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { View } from 'react-native-reanimated/lib/typescript/Animated'

const Time= () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  console.log(date)

  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
      mode="time"
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </View>
    
  );
}

export default Time;