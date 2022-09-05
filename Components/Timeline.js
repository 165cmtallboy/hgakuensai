import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Tineline(){
    const testData = [{},{},{},{},{},{},{},{},{}]
    return(
    <View style={styles.container}>
        <FlatList data={testData}
            renderItem={itm => (
                <View style={styles.timeline}>
                    <View>
                        <View>
                            <Text style={{fontSize: 25}}>うんこ祭</Text>
                            <Text>男子便所</Text>
                        </View>
                            <Text style={styles.time}>25:00~27:00</Text>
                    </View>
                </View>
        )} />
        <View style={styles.bottom}>
            <Text>←</Text>
            <Text>9月10日</Text>
            <Text>→</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    bottom:{
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time:{
        position: 'absolute',
        right: 0,
        margin: 17,
        backgroundColor: "#ccc",
        padding: 4,
        borderRadius: 20
        
    },
    timeline: {
        height: 60,
        backgroundColor: '#fff',
        width: '100%'
    }
  
  });
  
  