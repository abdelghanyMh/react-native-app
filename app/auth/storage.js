import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import jwtDecode from 'jwt-decode';
const key = 'authToken';

// For storing key
const storeToken = async autToken => {
  RNSecureKeyStore.set(key, autToken, {
    accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
  }).then(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    },
  );
};

// For retrieving key
const getToken = async () => {
  try {
    return await RNSecureKeyStore.get(key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

// For removing key
const removeToken = async () => {
  try {
    await RNSecureKeyStore.remove(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};
export default {getToken, removeToken, storeToken};
