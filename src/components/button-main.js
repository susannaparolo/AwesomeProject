
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButtonMain(props) { 
   
    return (
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{props.buttonText}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#ff6e6c',
        marginBottom: 20,
        marginTop: 40,
        height: 45,
        width: 170
    },
    textStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },
})


