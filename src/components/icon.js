import { StyleSheet, Image } from "react-native";

export default function Logo(props) {

    return (
        <Image style={styles.image} source={props.imageSource} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        marginBottom: 30,
        borderRadius: 15,
      }
});