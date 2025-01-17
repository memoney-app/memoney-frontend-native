import React, {useEffect, useRef, useState} from 'react';
import WebView from 'react-native-webview';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import {WebViewNativeEvent} from 'react-native-webview/lib/WebViewTypes';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/elements';

const Home = () => {
  const ref = useRef<WebView>(null);
  const [navState, setNavState] = useState<WebViewNativeEvent>();

  const navigation = useNavigation();

  useEffect(() => {
    const canGoBack = navState?.canGoBack;

    const onPress = () => {
      if (canGoBack) {
        ref?.current?.goBack();
        return true;
      } else {
        return false;
      }
    };

    navigation.setOptions({
      headerLeft: () =>
        canGoBack ? (
          <HeaderBackButton onPress={onPress} tintColor="#58595B" />
        ) : null,
    });
    BackHandler.addEventListener('hardwareBackPress', onPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onPress);
    };
  }, [navState?.canGoBack]);
  return (
    <WebView
      source={{uri: 'http://10.0.2.2:3000/'}}
      ref={ref}
      onNavigationStateChange={e => setNavState(e)}
    />
  );
};
export default Home;
