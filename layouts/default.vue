<template>
    <div>
    <!-- component -->
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0">
            <NuxtLink to="/">LOGO</NuxtLink>
        </div>
        <div>
            <ul class="flex flex-row text-right sm:flex-row sm:text-left sm:justify-between py-4 w-full">
                <li class="text-lg no-underline text-grey-darkest hover:text-blue-dark mr-5"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="text-lg no-underline text-grey-darkest hover:text-blue-dark mr-5"><NuxtLink to="/about">About</NuxtLink></li>
                <li class="text-lg no-underline text-grey-darkest hover:text-blue-dark mr-5"><NuxtLink to="/animals">Animals</NuxtLink></li>
                <li class="btn"><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </div>
        </nav>
        <div class="wrapper">
            <slot />
        </div>
        
    </div>
</template>

<style lang="css" scoped>
    .router-link-exact-active {color: #12b488;}
    .wrapper {padding: 20px;}
</style>