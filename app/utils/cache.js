import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
// config
const prefix = 'cache';
const expiryInMinutes = 5; // if the item is stored 5 minutes ago => expired

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    // console.log(prefix + key, JSON.stringify(item));
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};
const isExpired = item => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, 'minute') > expiryInMinutes;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    // if (isExpired(item)) {
    //   // Command Query Separation (CQS)
    //   await AsyncStorage.removeItem(prefix + key);
    //   return null;
    // }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const remove = async key => {
  try {
    await AsyncStorage.removeItem(prefix + key);
  } catch (error) {
    console.log(error);
  }
};

// get the saved user from the cache
const getUser = async () => {
  try {
    const authToken = await getToken();
    return authToken ? jwtDecode(authToken) : null;
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    return await get('authToken');
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  remove,
  get,
  getToken,
  getUser,
};
