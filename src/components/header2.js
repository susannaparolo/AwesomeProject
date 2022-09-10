import { StyleSheet, Text } from 'react-native';


export default function Header2(props) {
  return (
      <Text style={styles.header2}>{props.header2Text}</Text>
  );
}

const styles = StyleSheet.create({
    header2: {
        color: '#1b1325',
        fontWeight: 'bold',
        fontSize: 20
      }
});