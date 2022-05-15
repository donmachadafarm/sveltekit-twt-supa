<script>
    import {createPost,getUser} from '$lib/services'
    import UploadImage from './UploadImage.svelte';
    import Error from '$lib/Error.svelte'

    let file = null
    let postContent = ''

    let createPostPromise = Promise.resolve({})
    const handleCreatePost = async () => {
        createPostPromise = createPost({user: getUser().email, content: postContent, imageFile: file})
    }
</script>



<form class="form-control" on:submit|preventDefault={handleCreatePost}>
    <label for="post" class="label">
        <span class="label-text text-xl">Post sum shite</span>
    </label>
    <UploadImage bind:file />
    <textarea required bind:value={postContent} class="textarea textarea-bordered"></textarea>
        {#await createPostPromise}
    <button disabled type="button" class="btn">Submit</button>
        {:then {data,error}}
    <button class="btn">Submit</button>
        {#if data}
            <strong class="text-green-500">Successfully created a post!</strong>
        {/if}
    <Error {error} />
        {/await}
</form>