import { StyleSheet, Text } from 'react-native';


export default function Header1(props) {
  return (
      <Text style={styles.header1}>{props.header1Text}</Text>
  );
}

const styles = StyleSheet.create({
  header1: {
    color: '#1f1135',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 50
  }
});