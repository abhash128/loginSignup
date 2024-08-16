// EmailScreen.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const EmailScreen = () => {
  return (
    <WebView
      source={{uri: 'https://web.phone.email'}}
      originWhitelist={['*']}
      style={styles.webView}
    />
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});
