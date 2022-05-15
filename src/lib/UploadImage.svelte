<script>
    export let file

    const getFile = (e) => {
        file = !!e.target.files.length && e.target.files[0]
    }
</script>

<input type="file" class="input" on:change={getFile}>