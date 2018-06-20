import React, {Component} from 'react';
import ArticleList from './ArticleList';
import getPosts from '../fixtures';

class App extends Component {
	constructor() {
		super();


		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		getPosts()
			.then((posts) => {
				this.setState({posts})
			})
	}

	render() {
		return (
			<div>
				<h1>App name</h1>
				<ArticleList posts={this.state.posts}/>
			</div>
		)

	}
}

export default App