import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

export default registerForPushNotificationsAsync = async () => {
    // 実機端末か否かを判定
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      // ユーザーによる通知の許可or許可しないが決定していないときのみ
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      // ユーザーが通知許可しなかった場合は処理を抜ける
      if (finalStatus !== 'granted') return;
      // デバイストークンを取得する
      let token = await Notifications.getExpoPushTokenAsync();
      alert(token.data);
    } else {
      alert('プッシュ通知は、実機端末を使用してください。');
    }
  };