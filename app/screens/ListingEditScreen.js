import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  FormImagePicker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';

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
  const handleSubmit = async listing => {
    const result = await listingsApi.addListings({
      ...listing,
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
    console.log(result);
    if (!result.ok) return alert('could not save the listing!');

    alert('Success');
  };

  return (
    <Screen style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
