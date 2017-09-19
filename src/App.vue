<template>
    <div id="app">
        <!-- <img src="./assets/logo.png" alt=""> -->
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            transitionName: "slide"
        }
    },
    watch: {
        // 监视路由，参数为要目标路由和当前页面的路由
        '$route'(to, from) {
            const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
            const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
            this.$indicator.close();
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

* {
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
    width: 100%;
}

#app {
    height: 100%;
    width: 100%
}

* {
    margin: 0;
    padding: 0;
}

.slide-enter,
.slide_back-enter {
    position: absolute;
    width: 100%;
}

.slide-leave,
.slide_back-leave {
    position: absolute;
    width: 100%;
}

.slide-enter-active,
.slide_back-enter-active {
    transition: transform .3s ease-out;
}

.slide-leave-active {
    position: absolute;
    transition: transform .5s ease-out;
    z-index: -1;
    transform: translate3d(-40%, 0, 0);
}

.slide-enter-active {
   // box-shadow: -5px 0 10px -3px rgba(0, 0, 0, .4);
}

.slide-enter {
    transform: translate3d(100%, 0, 0);
}

.slide_back-leave-active {
    position: absolute;
    transition: transform .4s ease-out;
    z-index: 99;
    transform: translate3d(105%, 0, 0);
    //box-shadow: -5px 0 10px -3px rgba(0, 0, 0, .4);
}

.slide_back-enter {
    transform: translate3d(-40%, 0, 0);
}

.main-view {
    position: absolute;
}

.mint-indicator-wrapper {
    position: absolute;
}
</style>
