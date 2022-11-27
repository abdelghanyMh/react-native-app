import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({items, name, placeholder}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  // handel onChangeItem event raised by AppPicker
  const handleChange = item => {
    setFieldValue(name, item);
  };

  return (
    <>
      <AppPicker
        icon="apps"
        items={items}
        placeholder={placeholder}
        onChangeItem={handleChange}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
