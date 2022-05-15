<script>
    import {browser} from '$app/env'
    import {goto} from '$app/navigation'
    import {getUser,signIn} from '$lib/services'
    import Error from '$lib/Error.svelte'

    const user = getUser()

    if(browser && user) goto('/')

    let email = 'don_macadat@dlsu.edu.ph'
    let signInPromise = Promise.resolve({})
    const handleSignIn = () => {
        signInPromise = signIn({email})
    }
</script>

{#await signInPromise}
    Sending link to {email}
{:then {data,error}}
    <Error {error} />
    {#if data}
        <strong class="text-green-600">Successfully sent Link to {email}!</strong>
    {:else}
    <form class="form-control" on:submit|preventDefault={handleSignIn}>
        <label for="email" class="label">
            <span class="label-text text-4xl">Login to TwtDon!</span>
        </label>
        <div class="relative">
            <input required bind:value={email} type="email" name="email" id="email" placeholder="Email" class="w-full pr-16 input input-primary input-bordered">
            <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">Get link!</button>
        </div>
    </form>
    {/if}
{/await}