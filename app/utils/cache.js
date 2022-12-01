import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

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
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > expiryInMinutes;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
