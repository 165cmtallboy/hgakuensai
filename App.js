import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SNS from './Components/SNS.js'

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>

  );
}

const Stack = createNativeStackNavigator();

function LoadingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(53, 121, 116)'  }}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}
      />
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('./assets/menu1.png')} style={styles.menuimg}/>
        <Image source={require('./assets/menu2.png')} style={styles.booksimg}/>
        <Image source={require('./assets/menu3.png')} style={styles.booksimg}/>
        <Image source={require('./assets/menu4.png')} style={styles.booksimg}/>
        <SNS></SNS>
      </View>
  );
}



export default function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => setTimeout(() => setLoading(false), 1000), []);

  if(loading)
    return(<LoadingScreen />)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: 250
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  menuimg: {
    height: 100,
    width: '100%'
  },
  booksimg: {
    height: 160,
    width: '100%'
  }

});

