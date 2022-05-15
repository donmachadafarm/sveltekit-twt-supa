<script context="module">
    import {getPosts} from '$lib/services'

    export const load = async () => {
        const {data,error} = await getPosts()
        return {
            props: {
                posts: data,
                error: error,
            }
        }
    }

</script>

<script>
    import CreatePost from '$lib/CreatePost.svelte'
    import Post from '$lib/Post.svelte'
    import Error from '$lib/Error.svelte'
    import {browser} from '$app/env'
    import {goto} from '$app/navigation'
    import {signOut,getUser} from '$lib/services'

    export let posts, error

    // if not already logged in
    const user = getUser()
       if(browser && !user) goto('/login')
    
    const handleSignOut = async () => {
        await signOut()
        goto('/login')
    }
</script>

<header class="flex justify-between">
    <h1 class="text-2xl">
        <span>Welcome to TwtDon!</span>
    </h1>
    <button class="btn" on:click={handleSignOut}>Logout</button>
</header>

<CreatePost />
<div class="divider"></div> 
<Error {error} />
{#each posts || [] as post}
    <Post {...post} />
{:else}
    No posts found
{/each}