import Bugsnag from '@bugsnag/react-native';

// log prod errors to the Bugsnag
// this will display them to the dashboard
const logError = error => Bugsnag.notify(error);

// this function will initialize the Bugsnag service
const start = () => Bugsnag.start();

export default {logError, start};
