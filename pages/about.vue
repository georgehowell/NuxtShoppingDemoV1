<script setup>

// const { data } = await useFetch('/api/currency/:code')
const { data } = await useFetch('/api/hello')

</script>

<template>
    
    <div>
        <h1>About</h1>
        
        <hr>
        
        <div class="flex flex-row">
            <span>Data: &nbsp; </span> <pre>{{ data }}</pre>
        </div>

        <hr>

        
        <hr>
        <div class="my-5">&nbsp;</div>
        <MyComponent />
    </div>
</template>

<style scoped>
    h1 {font-size: 32px;}

    h3 span, pre {color: #00f; white-space: inherit;}

    div {margin: 15px auto}
</style>