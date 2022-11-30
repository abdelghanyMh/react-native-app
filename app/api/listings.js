import client from './Client';

const endpoint = '/listings';
const getListings = () => client.get(endpoint);

const addListings = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('description', listing.description);
  data.append('categoryId', listing.category['value']);

  // add images
  listing.images.forEach((image, index) => {
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    });
  });

  // append user's location if exist
  if (listing.location) {
    data.append('location', JSON.stringify(listing.location));
  }

  // console.log(data);
  return client.post(endpoint, data, {
    onUploadProgress: progressEvent =>
      onUploadProgress(progressEvent.loaded / progressEvent.total),
  });
};

export default {
  getListings,
  addListings,
};
