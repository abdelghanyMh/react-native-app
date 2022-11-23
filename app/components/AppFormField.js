import {useFormikContext} from 'formik';
import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
const AppFormField = ({name, ...otherProps}) => {
  const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
