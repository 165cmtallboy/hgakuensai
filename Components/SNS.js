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
  Alert,
  Linking,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>Linking.openURL('https://twitter.com/60th_hachisai')}
          style={styles.buttonTwitterStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/2021Twitterlogo.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=>Linking.openURL('https://www.instagram.com/60th_hachisai')}
          style={styles.buttonInstagramStyle} 
          activeOpacity={0.5}>
          <Image
            source={require('../assets/Instagramlogo_white.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Instagram</Text>
        </TouchableOpacity>

         <TouchableOpacity 
          onPress={()=>Linking.openURL('https://youtube.com/channel/UCnpniRRt0FdUFXYxQ1n0yjg')}
          style={styles.buttonYoutubeStyle} 
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Youtube</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>Linking.openURL('https://hachiojisaionline.wordpress.com')} 
          style={styles.buttonHomepageStyle} 
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>HomePage</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: -95,
    padding: 100,
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
    //backgroundColor: '#e1306c',
    backgroundColor: '#f54daa',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 20,
  },
  buttonYoutubeStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#c4302b',
    backgroundColor: '#ff0000',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 20,
  },
  buttonHomepageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#797979',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 20,
  },
  
  buttonImageIconStyle: {
    padding: 10,
    margin: 7,
    height: 45,
    width: 45,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#000000',
    marginBottom: -85,
    marginLeft: -60,
    fontSize: 17,
  },
  
});

export default App;
