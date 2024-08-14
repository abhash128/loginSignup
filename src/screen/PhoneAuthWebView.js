import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { getUniqueId } from 'react-native-device-info';

const PhoneAuthWebView = ({ navigation }) => {
  const [deviceId, setDeviceId] = useState('');

  const userInfo = {
    iss: 'phmail',
    aud: 'user',
    country_code: '+91', // Replace with actual country code
    phone_no: '9286581666', // Replace with actual phone number
  };

  const URI = `https://auth.phone.email/sign-in?countrycode=${userInfo.country_code}&phone_no=${userInfo.phone_no}&redirect_url=&auth_type=4&device=${deviceId}`;

  useEffect(() => {
    const fetchDeviceId = async () => {
      const id = await getUniqueId();
      setDeviceId(id);
    };
    fetchDeviceId();
  }, []);

  const handleWebViewMessage = (event) => {
    const encodedJWT = event.nativeEvent.data;
    navigation.navigate('SignUp', { token: encodedJWT });
  };

  return (
    <WebView
      source={{ uri: URI }}
      style={{ flex: 1 }}
      onMessage={handleWebViewMessage}
    />
  );
};

export default PhoneAuthWebView;
