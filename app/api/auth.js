import client from './Client';

const endpoint = '/auth';

const login = (email, password) => client.post(endpoint, {email, password});

export default {login};
