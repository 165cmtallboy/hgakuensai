//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonTwitterStyle} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwitterStyle} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: -95,
    padding: 100,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 20,
  },
  buttonTwitterStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1da1f2',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 20,
  },
  buttonInstagramStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 20,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 20,
  },
  
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 45,
    width: 45,
    resizeMode: 'stretch',
  },
  
});

export default App;
