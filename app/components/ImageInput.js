import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import defaultStyles from '../config/styles';
import Icon from './Icon';

/* toggle includeExtra */
const includeExtra = true;

// option for image picker
const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
    includeExtra,
  },
};

const ImageInput = ({imageUri, onChangeImage}) => {
  const selectImage = () => {
    try {
      ImagePicker.launchImageLibrary(options, result => {
        if (!result.didCancel) {
          const uri = result.assets[0].uri;
          console.log(uri);
          onChangeImage(uri);
        }
      });
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };
  const handelPress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(imageUri),
        },
        {
          text: 'No',
        },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handelPress}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon
            name="camera-alt"
            size={80}
            iconColor={defaultStyles.colors.grey_medium}
            backgroundColor={defaultStyles.colors.grey_light}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultStyles.colors.grey_light,
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
