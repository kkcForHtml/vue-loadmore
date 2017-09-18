<template>
    <mt-header :title="header_name">
        <router-link :to="link" slot="left" v-if="link!=='/'">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState('base',['header_name','link'])
        }
    }
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
