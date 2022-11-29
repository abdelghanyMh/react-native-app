import client from './Client';

const endpoint = '/listings';
const getLisings = () => client.get(endpoint);

export default {
  getLisings,
};
