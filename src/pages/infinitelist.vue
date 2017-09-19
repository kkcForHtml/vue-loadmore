<template>
    <div class="list main-view">
        <v-header></v-header>
        <infinit-scroll @changeScrollViewData="changeData" :url="url" :limit="limit" :total="total">
            <ul slot="container">
                <li v-for="(item, index) in arr" :key="index">{{item.admin}}</li>
            </ul>
        </infinit-scroll>
    </div>
</template>

<script>
    import infinitScroll from '@/components/infinitScroll'
    import { mapMutations } from 'vuex';
    export default {
        data() {
            return {
                url:'/mock/test',
                limit:10,
                total:54,
                arr:[]
            }
        },
        methods: {
            changeData(data){
                this.arr = data;
            },
            ...mapMutations('base',['changeStaticValue'])
        },
        mounted () {
            this.changeStaticValue({
                name:'header_name',
                newValue:'无限滚动'
            })
            this.changeStaticValue({
                name:'link',
                newValue:'/home'
            })
        },
        components: {
            infinitScroll
        }
    }
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .list {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: #fff;
        ul {
            li {
                text-align: center;
                line-height: 36px;
                border-bottom: 1px solid #ccc;
            }
        }
    }
</style>
