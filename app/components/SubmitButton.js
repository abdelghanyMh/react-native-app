import {useFormikContext} from 'formik';
import React from 'react';

const SubmitButton = ({title}) => {
  const {handleSubmit} = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
