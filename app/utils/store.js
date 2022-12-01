import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

// config
const prefix = 'cache';
const expiryInMinutes = 5; // if the item is stored 5 minutes ago => expired

const storeData = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    const jsonValue = JSON.stringify(item);
    await AsyncStorage.setItem(prefix + key, JSON.stringify(jsonValue));
  } catch (e) {
    // saving error
    console.error(e);
  }
};

const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const item = JSON.parse(jsonValue);

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    } else {
      return item.value;
    }
  } catch (e) {
    // error reading value
    console.error(e);
  }

  // check if this item is EXPIRED
  const isExpired = item => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    const isExpired = now.diff(storedTime, 'minute') > expiryInMinutes;
    return isExpired;
  };
};

export default {storeData, getData};
