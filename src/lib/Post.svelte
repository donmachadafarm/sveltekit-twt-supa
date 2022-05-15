<script>
    import Error from '$lib/Error.svelte'
    import { createComment, createLike, getUser} from '$lib/services'
    export let id, user, content, likes =0, comments = [], publicURL = null

    let commentContent = ''
    let createCommentPromise = Promise.resolve({})
    const addComment = () => {
        createCommentPromise = createComment({user: getUser().email, post: id, content: commentContent})
            .then(({data,error}) => {
            comments = [...data, ...comments]
            return {data,error}
        })
        
        commentContent =''
    }

    const addLike = () =>{
        likes+=1
        createLike({user: getUser().email, post: id})
    }
</script>

<article class="card card-side bg-base-100 shadow-xl mt-8">
    {#if publicURL}
    <figure>
        <img alt='kek' src={publicURL}>
    </figure>
    {/if}
    <div class="card-body">
      <h2 class="card-title">{user} says . .</h2>
      <p>{content}</p>
      <div class="card-actions flex justify-between">
        {#await createCommentPromise}
            Posting comment . .
        {:then {data,error}}
            <Error {error} />
            {#if data}
                Nice comment
            {/if}
        {/await}
        <form class="form-control" on:submit|preventDefault={addComment}>
            <div class="input-group flex">
                <input bind:value={commentContent} type="text" placeholder="Comment here. . " class="w-32 input input-bordered" />
                <button class="btn btn-square">
                    +
                </button>   
            </div>
        </form>
        <button class="btn gap-2" on:click={addLike}>
            {likes} {likes === 0 ? 'Like' : 'Likes'}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
      </div>
      {#each comments as comment}
          {comment.user} says. . . <q>{comment.content}</q>
      {/each}
    </div>
</article>