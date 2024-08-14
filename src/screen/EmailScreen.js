import React from 'react';
import { WebView, StyleSheet } from 'react-native';

const EmailScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://web.phone.email' }}
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
