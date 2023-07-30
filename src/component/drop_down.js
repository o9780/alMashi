import React from 'react';
import Select from '@redmin_delishaj/react-native-select';



const Dropdown = ({adata,fun,value,box,text}) =>{

return(

    <Select
        textBoxStyle={box}
        dropdownStyle={text}
        data={adata}
        onSelect={fun}
        value={value}
      />


);

}
export default Dropdown;