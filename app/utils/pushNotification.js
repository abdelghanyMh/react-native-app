// showLastCommitMessageForThisLibrary.js
import {create} from 'apisauce';

// start making calls
const PushNotification = (title, body, targetFcmToken) => {
  const serverKey =
    'key=AAAAjiC_a6w:APA91bGbLBg5fzZYJxpo_k3cBMKUdf6JxwoLd5VLGR16a5I2doIYoYkF9v84E0TDTuhXPOGe95aBixYgKoxx3yBDXjjWxwdp8HH75xEhD8lss1JBDAwGe0f96ojmgY2ZuXtSWU1_6cZo';
  targetFcmToken =
    'e1ynApnxTESAaGalygeNy5:APA91bFI_UNNlllf43BjKLQXTyMFZjHlk9NdA-CB_vLUEmwpmiBZ1cyk6nm1RNY2PPmunl_mJNG4Hc3mn6EK6YGdBZFuSFOV-t-vmFV4IAxQmrBdD2jHSBRa21dz1EYf6rSgAWM7DSF7';

  const api = create({
    headers: {
      Authorization: serverKey,
      'Content-Type': 'application/json',
    },
  });
  api.post('https://fcm.googleapis.com/fcm/send', {
    to: targetFcmToken,
    collapse_key: 'type_a',
    notification: {
      body: 'Body of Your Remote Notification',
      title: 'Title of Your Remote Notification',
    },
    data: {
      body: 'Body of Your Notification in Data',
      title: 'Title of Your Notification in Title',
      key_1: 'Value for key_1',
      key_2: 'Value for key_2',
    },
  });
};

export default PushNotification;
