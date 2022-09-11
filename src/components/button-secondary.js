import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButtonSecondary(props) {


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
        backgroundColor: 'black',
        height: 45,
        width: 170
    },
    textStyle: {
        fontSize: 15,
        color: 'white'
    },
})
