import React, {Component} from 'react';

class Article extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		const {post} = this.props;
		const body = this.state.isOpen && <section>{post.body}</section>;
		return (
			<li>
				<div>
					<h2>
						<a href="#" onClick={this.handleClick}>{post.title}</a>
					</h2>
					{body}
				</div>
			</li>
		)
	}
}


export default Article