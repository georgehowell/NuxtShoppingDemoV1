<template>

<div tabindex="0" class="focus:outline-none">
    <div class="mx-auto container py-8">
        
        <div class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
            <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                <div>
                    <img alt="girl texting" :src="product.image" class="focus:outline-none w-full h-auto" />
                </div>
                <div class="bg-white">
                    <div class="flex items-center justify-between px-4 pt-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" class="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                            </svg>
                        </div>
                        <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center">
                            <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">{{ product.title }}</h2>
                            <h4 tabindex="0" class="focus:outline-none text-xs text-gray-600 pl-5">Price: ${{ product.price }}</h4>
                        </div>
                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">{{ product.description }}</p>
                        <div class="flex items-center justify-between py-4">
                            <span tabindex="0" class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">{{ product.rating.rate }}</span>
                            <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">{{ product.category }}</h2>
                        </div>
                        <button class="btn flex mx-auto" tabindex="0"><span class="material-symbols-outlined mr-3">shopping_cart_checkout</span><span class="text-lg pr-4">add to cart</span></button>

                    </div>
                </div>
            </div>
            <!-- Card Ends -->
        </div>
    </div>
</div>

</template>

<script setup>
    const { product } = defineProps(['product'])
</script>