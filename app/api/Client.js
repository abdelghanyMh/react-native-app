import {create} from 'apisauce';
import cache from '../utils/cache';

// create api client object
// so we can call the doneWithIt backend

const apiClient = create({
  baseURL: 'http://192.168.1.2:9000/api',
});

// grant access to protected routes
//  add auth token to request  (x-auth-token) for the auth middleware
apiClient.addAsyncRequestTransform(async request => {
  const authToken = await cache.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

// @override api sauce's get function
// cache the server response
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  // if server fail we get the cached response stored the first time
  const data = await cache.get(url);
  return data ? {ok: true, data} : response;
};
export default apiClient;
