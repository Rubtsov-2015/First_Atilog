import React from 'react'
import Article from "./Article";

export default function ArticleList({posts}) {
	return (
		<ul>
			{posts.map((post) => (<Article key={post.id} post={post}/>))}
		</ul>
	)
}