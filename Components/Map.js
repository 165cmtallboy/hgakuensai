import { Text, View } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Nearby(){
    return (<Text>NB</Text>)
}

function VS(){
    return (<Text>NVCSB</Text>)
}


export default function Map(){
    return(
            <Tab.Navigator>
                <Tab.Screen name="近くのコンテンツ" component={Nearby} />
                <Tab.Screen name="全体地図" component={Nearby} />
                <Tab.Screen name="教室地図" component={VS} />
            </Tab.Navigator>
       )
}