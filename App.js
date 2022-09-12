import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SNS from './Components/SNS.js'
import Book from './Components/Book.js';
import Congest from './Components/Congest.js';
import Map from './Components/Map.js';
import Notifications from './Components/Notifications.js';
import Timeline from './Components/Timeline.js';

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
        <Book navigation={navigation}></Book>
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
        <Stack.Screen name="Congest" component={Congest} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Timeline" component={Timeline} />
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
    width: '100%'
  },
  tinyLogo: {
    width: '100%',
    height: 250
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }

});

