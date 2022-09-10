
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButtonMain(props) { 
    function randomLog() {
        console.log("Main Button Log")
    }
   
    return (
            <TouchableOpacity style={styles.buttonStyle} onPress={randomLog}>
                <Text style={styles.textStyle}>{props.buttonText}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#ff6e6c',
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 20,
        marginTop: 20,
    },
    textStyle: {
        fontSize: 20,
        color: 'black'
    },
})


