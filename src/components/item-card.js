import React from "react";
import { StyleSheet } from 'react-native';
import {Card, Title , Paragraph } from 'react-native-paper';
import CardButton from "./button-item-card";


const CreateCard = (props) => {
	
	return(
		
		<Card style={styles.container}>
            <Card.Content style={styles.cardTitle}>
                <Title style={styles.titleStyle}>{props.title}</Title>
            </Card.Content>
            
            <Card.Content>
                <Paragraph style={styles.paragraphStyle}>{props.description}</Paragraph>
            </Card.Content>
            <CardButton buttonText='APPLY NOW'/>

        </Card>
		
	)
}


const styles = StyleSheet.create({
	container: {
		alignContent:'center',
		height: 'auto',
        width: 280,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 6,
        backgroundColor: '#e2daeb',
	},
    titleStyle: {
        color: '#1f1135',
        fontWeight: 'bold',
        fontSize: 13,
        marginVertical: -5,
        lineHeight: 20,
        marginBottom: 10
    },
    paragraphStyle: {
        fontSize: 12
    }
})

export default CreateCard;
