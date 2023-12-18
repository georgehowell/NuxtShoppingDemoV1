<script setup>
    const { data, pending, refresh } = await useFetch('https://api.api-ninjas.com/v1/animals', {
        pick: ['name', 'species'],
        transform: (data) => ({
            name: data.name.toUpperCase(),
        })
    });

    useHead({
        titleTemplate: 'My App - %s',
        viewport: 'width=device-sidth, initial-scale=1, maximum-scale=1',
        charset: 'utf-8',
        meta: [ 
            {name: 'description', content: 'My amazing site'}
        ],
        bodyAttrs: {
            class: 'test'
        }
    })
</script>

<template>
    
    <div>
        {{ data }}
    </div>
    <button :disabled="pending" @click="refresh">refresh</button>
</template>