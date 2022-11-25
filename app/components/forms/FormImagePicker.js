import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

const FormImagePicker = ({name}) => {
  const {setFieldValue, touched, errors, values} = useFormikContext();
  const imageUris = values[name];

  // handel onAddImage event raised by children of ImageInputList
  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri]);
  };

  // handel onAddImage event raised by children of ImageInputList

  const handleRemove = uri => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri !== uri),
    );
  };

  return (
    <View>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
