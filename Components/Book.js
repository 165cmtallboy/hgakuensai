import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function({ navigation }){
    return(
    <View>
        <TouchableOpacity
            onPress={() => navigation.push('Notifications')}
        >
            <Image 
                source={require('../assets/menu1.png')} 
                style={styles.menuimg}
                
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.push('Map')}
        >
            <Image 
                source={require('./../assets/menu2.png')} 
                style={styles.booksimg}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.push('Timeline')}
        >
            <Image 
                source={require('./../assets/menu3.png')} 
                style={styles.booksimg}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.push('Congest')}
        >
            <Image 
                source={require('./../assets/menu4.png')} 
                style={styles.booksimg}
            />
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    menuimg: {
      height: 100,
      width: '100%'
    },
    booksimg: {
      height: 160,
      width: '100%'
    }
  
  });
  
  