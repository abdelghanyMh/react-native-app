import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import ImageInput from './ImageInput';

// collection of the images component
// the state is maintained  on the consumer of this component
// this component just raise events
const ImageInputList = ({imageUris = [], onAddImage, onRemoveImage}) => {
  const scrollView = useRef();
  return (
    // prevent ScrollView from taking the whole screen
    <View>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal>
        <View style={styles.container}>
          {imageUris.map(uri => (
            // if the uri exist and the user press the image ==> he want to delete it
            <ImageInput
              key={uri}
              imageUri={uri}
              onChangeImage={uri => onRemoveImage(uri)}
            />
          ))}
          {/* add input image just for the adding functionality */}
          <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
