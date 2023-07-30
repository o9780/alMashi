import ImagePicker from 'react-native-image-crop-picker';
import { View, Text, TouchableOpacity } from 'react-native';

const AttachPhoto = () => {
    
    return (
        <TouchableOpacity onPress={pickImage}>
            <Text>Attach Photo</Text>
        </TouchableOpacity>
    );
};
async function pickImage() {
    try {
        const image = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        });
        console.log(image.path);
        // do something with the image data
    } catch (err) {
        console.log(err);
    }
}
export default AttachPhoto;