import client from './Client';

const register = pushToken =>
  client.post('/expoPushTokens', {token: pushToken});

export default {
  register,
};
