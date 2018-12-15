/* eslint-disable */
<template id="calender">
    <h1>This is breaking a lot</h1>
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
