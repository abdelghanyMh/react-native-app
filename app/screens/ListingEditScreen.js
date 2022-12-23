import {ScrollView, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {useState} from 'react';
import listingsApi from '../api/listings';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  FormImagePicker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadScreenVisible, setUploadScreenVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing, {resetForm}) => {
    // reset progress value so that the progress value starts from 0
    setProgress(0);
    setUploadScreenVisible(true);
    const result = await listingsApi.addListings(
      {
        ...listing,
        location: {
          latitude: location.coords.latitude || null,
          longitude: location.coords.longitude || null,
        },
      },
      progress => setProgress(progress),
    );

    if (!result.ok) {
      setUploadScreenVisible(false);
      return alert('could not save the listing!');
    }

    // In case everything goes well, reset the Form
    resetForm();
  };

  return (
    <ScrollView keyboardShouldPersistTaps={'never'}>
      <Screen style={styles.container}>
        {/* upload screen start */}
        <UploadScreen
          progress={progress}
          visible={uploadScreenVisible}
          onDone={() => setUploadScreenVisible(false)}
        />
        <Form
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <FormImagePicker name="images" />
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
          />
          <Picker items={categories} name="category" placeholder="Category" />
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </Form>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
