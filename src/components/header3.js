import { StyleSheet, Text } from 'react-native';


export default function Header3(props) {
  return (
      <Text style={styles.header3}>{props.header3Text}</Text>
  );
}

const styles = StyleSheet.create({
    header3: {
        color: '#1b1325',
        fontSize: 20,
        marginBottom: 20
      }
});