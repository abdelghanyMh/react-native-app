import React from 'react';
import {Alert, Keyboard} from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from './forms';
import messagesApi from '../api/messages';
import useNotification from '../hooks/useNotification';

function ContactSellerForm({listing}) {
  const {DisplayLocalNotification} = useNotification();

  const handleSubmit = async ({message}, {resetForm}) => {
    Keyboard.dismiss();

    console.log(message);

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send the message to the seller.');
    }

    resetForm();

    DisplayLocalNotification(successLocalNotification);
    // this can be extended to push a remote notification ot the seller using the "../utils/pushNotification"
    // saying that a new message has been sent concerning listing.id like messenger
  };

  return (
    <AppForm
      initialValues={{message: ''}}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('Message'),
});
const successLocalNotification = {
  title: 'Awesome!',
  body: 'Your message was sent to the seller.',
};

export default ContactSellerForm;
