<template>
    <div class="home">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <div class="hello">
            <img v-holder="'img=200x200?auto=yes&random=yes'">
        </div>
        <div class="wrapper">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sint.</h3>
        </div>
        <div id="travail">
            {{ text }} Nice to meet Vue.
        </div>
        <!-- <PostAside msg="Welcome to the Vue of your wetUssy.js App" /> -->
    </div>
</template>

<style scoped>
    
</style>

<script>
    Vue.config.devtools = true;
    
    new Vue({
        el: '#travail',
        data: {
            items: [
                'thingie',
                'another thingie',
                'lots of stuff',
                'yadda yadda'
            ]
        }
    })
</script>