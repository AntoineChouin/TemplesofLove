<script>
    // @ is an alias to /src
    import barbarian from '@/components/barbarian.vue'
    import archer from '@/components/archer.vue'
    import giant from '@/components/giant.vue'
    
    export default {
        name: 'about',
        components: {
            barbarian,
            archer,
            giant
        }
    
    }
</script>

<template>
    <div id="about">
        <header class="about">
            <h1>This is an Clash of Titan page</h1>
        </header>
        <section class="container clashofcards">
            <barbarian />
            <!-- end clash-card barbarian-->
            <archer />
            <!-- end Archer'swrapper -->
            <giant />
            <!-- end wrapper -->
        </section>
    </div>
</template>
