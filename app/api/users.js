import client from './Client';

const endpoint = '/users';

const register = data => client.post(endpoint, data);

export default {register};
