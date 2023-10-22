<script>
	export let data
</script>

<h1>詳細ページ</h1>
<div class="post">
	<h2>{data.post.title}</h2>
	<p>{data.post.body}</p>
</div>

<style>
	.post {
		padding: 10px;
	}
</style>
