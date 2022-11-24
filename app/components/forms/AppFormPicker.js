import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({items, name, placeholder}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        icon="apps"
        items={items}
        placeholder={placeholder}
        onValueChange={item => setFieldValue(name, item)}
        selectedValue={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
