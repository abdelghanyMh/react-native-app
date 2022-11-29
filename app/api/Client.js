import {create} from 'apisauce';

// create api client object
// so we can call the doneWithIt backend

export default create({
  baseURL: 'http://192.168.1.3:9000/api',
});
