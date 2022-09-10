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
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    textStyle: {
        fontSize: 20,
        color: 'white'
    },
})
