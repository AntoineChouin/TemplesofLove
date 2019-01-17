<script>
    // @ is an alias to /src
import warrior from '@/components/heroes/warrior.vue'
import barbarian from '@/components/barbarian.vue'
import archer from '@/components/archer.vue'
import giant from '@/components/giant.vue'
    
export default {
    name: 'about',
    components: {
        barbarian,
        archer,
        giant,
        warrior
    },
    props: {
        msg: 'String of doom'
    }
}
</script>

<template>
    <div id="about">
        <header class="about">
            <h1>{{msg}}</h1>
        </header>
        <section class="container clashofcards">
            <warrior />
            <barbarian />
            <!-- end clash-card barbarian-->
            <archer />
            <!-- end Archer'swrapper -->
            <giant />
            <!-- end wrapper -->
        </section>
    </div>
</template>

<style lang="scss" >
#about{
    background-color: #EE5487;
}
    $barbarian: #EC9B3B;
    $paladin: #9b3bec;
    $monk: #ec3b8c;
    $archer: #EE5487;
    $giant: #F6901A;
    $goblin: #82BB30;
    $wizard: #4FACFF;
    $border-radius-size: 5px;
    @import './../scss/_clashoftitan';
    #nav {
        z-index: 9999;
    }
    .clashofcards{
        position: relative;
        z-index: 999;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-flow: wrap row;
        .wrapper{
            flex: 1 1 25%;
        }
    }
    .clash-title{
        // display: none;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 3em;
        flex: 1 1 100%;
}
</style>
