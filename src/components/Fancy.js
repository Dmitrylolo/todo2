import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import { styles } from '../styles/styles';

export class Fancy extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Fancy</Text>
			</View>
		);
	}
}

