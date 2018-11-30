/* eslint-disable */
<template id="calender">
    <div class="container calendrier">
        <header>
            <h3>Lorem di fuck</h3>
        </header>
        <section class="wrapper">
            <header class="wrapper-card card">
                <h3>Dimanche</h3>
                <time datetime="2018-07-07">July 7</time>
            </header>
        </section>
        <section class="wrapper">
            <header class="wrapper-card card">
                <h3>Lundi</h3>
                <time datetime="2018-07-07">July 7</time>
            </header>
        </section>
    </div>
</template>
<style lang="scss" scoped>
#calender{
    text-decoration: underline;
}
time {
    font-weight: bold;
}
.calendrier{
    background-color: rgba(#888887, 0.45);
    color: mix(#fefffc, #a5ed22);

    .wrapper{
    display: flex;
    align-items: center;
    flex-flow:row wrap;
    justify-content: space-around;
    &-card{
        flex: 0 0 (100% * (1/2));
    }
    }
}
</style>
