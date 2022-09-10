import { StyleSheet, Text } from 'react-native';


export default function MainText(props) {
  return (
      <Text style={styles.mainText}>{props.mainText}</Text>
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: '#1f1135',
    fontSize: 14,
    padding: 20
}
});