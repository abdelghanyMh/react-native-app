import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import firebasefcmPushTokenApi from '../api/firebasefcmPushToken';

const useNotification = () => {
  const registerForPushNotifications = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      //   console.log('authStatus=>', authStatus);
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (!enabled) return;
      //   console.log('Authorization status:', authStatus);

      const fcmToken = await messaging().getToken();
      //   console.log('FCM Token -> ', fcmToken);

      firebasefcmPushTokenApi.register(fcmToken);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  };

  //   display local notification using notifee
  const DisplayLocalNotification = async ({title, body}) => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  const handelRemoteMessage = remoteMessage => {
    const {
      notification: {body: body, title: title},
    } = remoteMessage;

    DisplayLocalNotification(title, body);
  };

  //   Foreground state messages
  const handleForegroundNotification = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage =>
      handelRemoteMessage(remoteMessage),
    );

    return unsubscribe;
  };

  //   Background & Quit state messages are handled see THE : INDEX.JS FILE
  //   DOCS : https://rnfirebase.io/messaging/usage#background--quit-state-messages

  useEffect(() => {
    registerForPushNotifications();
    handleForegroundNotification();
  }, []);

  return {DisplayLocalNotification};
};

export default useNotification;
