import React from "react";
import { TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";

const NavigationListItem = ({ item, onPressItem }) => {
	return (
		<TouchableOpacity onPress={onPressItem} style={{ backgroundColor: item.background }}>
			<ImageBackground style={[styles.container, { opacity: .8 }]} source={{ uri: item.imageBackground }}>
				<Text style={styles.text}>{item.title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 90,
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	text: {
		color: '#fff',
		fontSize: 26,
		opacity: 1,
		fontWeight: '900',
	}
});


export default NavigationListItem;