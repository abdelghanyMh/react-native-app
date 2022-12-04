import client from './Client';

const send = (message, listingId) =>
  client.post('/messages', {
    message,
    listingId,
  });

export default {
  send,
};
