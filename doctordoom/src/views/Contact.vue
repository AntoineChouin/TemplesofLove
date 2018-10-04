<script>
    export default {
        name: 'Example',
        data() {
            return {
                holder: {
                    img: '300x200',
                    auto: 'yes',
                    theme: 'sky'
                }
            }
        }
    }
</script>

<template>
    <div class="container calendrier">
        <header>
            <h3>Lorem di fuck</h3>
        </header>
        <div >
            <img v-holder>
        </div>
        <section class="calendrier-section">
            <h3>This is how we die</h3>
            <article class="chi">
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, corporis?</li>
                    <li>Sint perferendis aliquid vero eveniet sunt doloribus atque temporibus eius?</li>
                    <li>Doloribus esse reprehenderit animi incidunt voluptates quibusdam perferendis ratione facere.</li>
                    <li>Velit ratione facilis dolores. Aut delectus voluptatibus aliquam hic sed?</li>
                    <li>Numquam architecto possimus debitis vero quos nesciunt nam ab neque.</li>
                </ul>
            </article>
            <article class="chi">
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, enim?</li>
                    <li>Optio eaque placeat veniam, adipisci error consequuntur laborum quis quae?</li>
                    <li>Libero dignissimos omnis optio maxime porro qui inventore nihil voluptas.</li>
                    <li>Totam facere eius commodi optio quidem sed error sit tempore?</li>
                    <li>Optio, facilis obcaecati. Cupiditate corrupti asperiores velit deleniti est illo.</li>
                </ul>
            </article>
            <article class="chi"></article>
            <article class="chi"></article>
        </section>
        <section class="calendrier-section">
            <h3>This is how we die</h3>
            <article class="chi">
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, corporis?</li>
                    <li>Sint perferendis aliquid vero eveniet sunt doloribus atque temporibus eius?</li>
                    <li>Doloribus esse reprehenderit animi incidunt voluptates quibusdam perferendis ratione facere.</li>
                    <li>Velit ratione facilis dolores. Aut delectus voluptatibus aliquam hic sed?</li>
                    <li>Numquam architecto possimus debitis vero quos nesciunt nam ab neque.</li>
                </ul>
            </article>
            <article class="chi">
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, enim?</li>
                    <li>Optio eaque placeat veniam, adipisci error consequuntur laborum quis quae?</li>
                    <li>Libero dignissimos omnis optio maxime porro qui inventore nihil voluptas.</li>
                    <li>Totam facere eius commodi optio quidem sed error sit tempore?</li>
                    <li>Optio, facilis obcaecati. Cupiditate corrupti asperiores velit deleniti est illo.</li>
                </ul>
            </article>
            <article class="chi">
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, enim?</li>
                    <li>Optio eaque placeat veniam, adipisci error consequuntur laborum quis quae?</li>
                    <li>Libero dignissimos omnis optio maxime porro qui inventore nihil voluptas.</li>
                    <li>Totam facere eius commodi optio quidem sed error sit tempore?</li>
                    <li>Optio, facilis obcaecati. Cupiditate corrupti asperiores velit deleniti est illo.</li>
                </ul>
            </article>
            <article class="chi">
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, enim?</li>
                    <li>Optio eaque placeat veniam, adipisci error consequuntur laborum quis quae?</li>
                    <li>Libero dignissimos omnis optio maxime porro qui inventore nihil voluptas.</li>
                    <li>Totam facere eius commodi optio quidem sed error sit tempore?</li>
                    <li>Optio, facilis obcaecati. Cupiditate corrupti asperiores velit deleniti est illo.</li>
                </ul>
            </article>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    @mixin clearflex() {
        &:before,
        &:after {
            content: "";
            flex-basis: 0;
            order: 1;
        }
    }
    $color: pink,
    gold,
    #ff7faa,
    green,
    blue,
    purple;
    $clrs: #89cd66,
    #66cdaa,
    #aa66cd,
    #cd6689,
    #cd7766,
    #cd66bd;
    @mixin bckg($choix) {
        // $back: $clrs;
        @for $i from 1 through length($choix) {
            &:nth-child(#{length($choix)}n + #{$i}) {
                background: lighten(nth($clrs, $i), 20%);
                // border: 4px dashed darken(nth($choix, $i), 15%);
            }
        }
    }
    .container {
        // max-width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        section {
            @include clearflex();
        }
    }
    .calendrier {
        border: 3px solid black;
        background-color: #aaa;
        &-section {
            flex: 0 0 (100% * (1/4));
            margin: 0 1.5%;
            @include bckg($color);
        }
    }
</style>
