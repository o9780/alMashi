import DialogInput from 'react-native-dialog-input';

const Dialog=()=>{
    return(
<DialogInput isDialogVisible={isDialogVisible=true}
            title={"DialogInput 1"}
            message={"Message for DialogInput #1"}
            hintInput ={"HINT INPUT"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={ () => {this.showDialog(false)}}></DialogInput>
    );
        }

export default Dialog;