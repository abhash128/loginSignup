import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/Onboarding1.png')} style={styles.image} />,
          title: 'Welcome to MyApp',
          subtitle: 'This is an app that will change your life!',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/Onboarding2.png')} style={styles.image} />,
          title: 'Stay Organized',
          subtitle: 'Keep track of everything you need in one place.',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/Onboarding3.png')} style={styles.image} />,
          title: 'Achieve Your Goals',
          subtitle: 'We will help you reach your dreams.',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default OnboardingScreen;
