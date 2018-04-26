import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
//import { reddit } from '../reducers/reducers';
import { ADD_POST } from '../reducers/reducers';

const _Reddit = (props) => (
	<View>
		{props.posts.map(posts => <Text key={posts.name}>{posts.name}</Text>)}
		<TouchableOpacity onPress={props.addRedditPost}>
			<Text>ADD</Text>
		</TouchableOpacity>
	</View>
);

/*class Reddit extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}
	componentWillMount() {
		fetch('https://www.reddit.com/.json', {
			Accept: 'application/json'
		})
		.then(res => res.json())
		.then(data => {
			this.setState({ posts: data.data.children });
		});
		console.log(this.state.posts);
	}

	render() {
		return (
			<View>
				<Text>Reddit</Text>
				<View>
					{this.props.posts.map(post => <Text>{post.name}</Text>)}
				</View>
			</View>
		);
	}
}*/

const mapStateToProps = (state) => ({
	posts: state.reddit
});

const mapActionsToProps = (dispatch) => ({
	addRedditPost(post = { name: 'new post' }) {
		console.log(post);
		dispatch({ type: ADD_POST, payload: post });
	}
});

export const Reddit = connect(mapStateToProps, mapActionsToProps)(_Reddit);
