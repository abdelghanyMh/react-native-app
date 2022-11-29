import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';

const useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    // const response = await listingApi.getListings();
    const response = await apiFunc(...args);
    setLoading(false);

    // handling errors
    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };
  return {
    data,
    error,
    loading,
    request,
  };
};

export default useApi;

const styles = StyleSheet.create({});
