import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CardButton(props) { 

    return (
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{props.buttonText}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#fbdd74',
        borderRadius: 4,
        marginHorizontal: 70,
        marginTop: 15,
    },
    textStyle: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold'
    },
})


