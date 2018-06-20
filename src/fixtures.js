const url = 'https://jsonplaceholder.typicode.com/posts/';

function getData() {
	console.log(fetch(`${url}`).then(r => r.json()))
	return fetch(`${url}`).then(r => r.json())
}

export default getData