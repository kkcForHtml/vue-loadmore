<template>
    <div class="list main-view">
        <v-header></v-header>
        <scroll-view
            @changeScrollViewData="resScrollChange"
            :url="url"
            :limit="limit"
            :total="total">
            <ul slot="container">
                <li v-for="(item, index) in arr" :key="index" v-alert="item.url">{{item.url}}</li>
            </ul>
        </scroll-view>
    </div>
</template>

<script>
import scrollView from '@/components/scrollView'; //下拉刷新下拉加载组件
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            url: '/mock/test', //后台接口地址
            limit: 10,  //后台每次返回个数
            total: 67,   //后台总条目数（真实接口有提供）
            arr: []
        }
    },
    methods: {
        ...mapMutations('base', ['changeStaticValue']),
        resScrollChange(data) {
            this.arr = data; //获取子组件返回数据
        }
    },
    mounted() {
        //静态数据变化
        this.changeStaticValue({
            name: 'header_name',
            newValue: '列表'
        })
        this.changeStaticValue({
            name: 'link',
            newValue: '/home'
        })

    },
    components: {
        scrollView
    }
}
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    ul {
        li {
            text-align: center;
            height: 36px;
            line-height: 36px;
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>
