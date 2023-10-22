type Post = {
	userId: number
	id: number
	title: string
	body: string
}

export async function load(): Promise<{ posts: Post[] }> {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	return {
		posts: response.ok && (await response.json())
	}
}
