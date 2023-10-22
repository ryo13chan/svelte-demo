type Post = {
	userId: number
	id: number
	title: string
	body: string
}

export async function load({ params }): Promise<{ post: Post }> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
	return {
		post: response.ok && (await response.json())
	}
}
