import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function(){
    return(
    <View>

        <TouchableOpacity>
            <Image 
                source={require('../assets/menu1.png')} 
                style={styles.menuimg}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image 
                source={require('./../assets/menu2.png')} 
                style={styles.booksimg}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image 
                source={require('./../assets/menu3.png')} 
                style={styles.booksimg}
            />
        </TouchableOpacity>
        <TouchableOpacity>
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
  
  