<template>
    <section :style="{'-webkit-overflow-scroll': scrollMode}">
        <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @top-status-change="handleTopChange"  ref="loadmore" :auto-fill='false'>
            <slot name="container"></slot>
            <div class="no-data" v-if="allLoaded">没有更多数据!</div>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" class="ic">
                    <i class="iconfont icon-xialashuaxin3" :class="{ 'rotate': topStatus === 'drop'}"></i><br />
                    {{topStatus=='drop'?'释放刷新':'下拉刷新'}}
                </span>
                <span v-show="topStatus === 'loading'" class="t">
                    <mt-spinner type="triple-bounce" color="rgb(38, 162, 255)" :size="32"></mt-spinner>
                </span>
            </div>
        </v-loadmore>
    </section>
</template>

<script>
    import { Toast } from 'mint-ui'
    import { Loadmore } from 'mint-ui';
    export default {
        props: {
            url: {
                type: String,
                default:'' 
            },
            methods: {
                type: String,
                default:'post' //默认post请求
            },
            limit: {
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                default: 40
            }                
            
        },
        data() {
            return {
                topStatus: '',
                scrollMode:'touch',
                allLoaded:false,
                page:1,
                arr: []
            }
        },
        methods: {
            init(showLoading=true) {
                return this.$axios({
                            url:'/mock/test',
                            params:{
                                page:this.page,
                                limit:this.limit,
                                total:this.total
                            },
                            methods:this.methods,
                            showLoading
                        }).then(data=>{                
                            this.arr = this.page == 1 ? data.data.res : this.arr.concat(data.data.res);//数据填充
                            this.allLoaded = this.arr.length >= this.total ? true : false;  //没有数据则关闭上拉加载
                        })
            },        
            loadTop() {
                this.page = 1;
                this.init(false).then(data=>{
                    this.$refs.loadmore.onTopLoaded();
                    this.$nextTick(()=>{
                        this.scrollMode = 'touch'
                    });
                    Toast({
                        message:'刷新成功',
                        position:'bottom'
                    });                
                })
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom(){
                this.page = this.page+1;  
                this.init(false).then(()=>{
                    this.$refs.loadmore.onBottomLoaded();
                    this.$nextTick(() => {
                        this.scrollMode = 'touch'
                    })
                });                      
            }
        },
        mounted () {
            //初始化数据
            this.init();
        },
        watch: {
            //监听arr变化
            arr(newValue, oldValue) {
                this.$emit('changeScrollViewData',newValue);  //像外层广播数据，这里用vuex应该更加方便，可以进一步降低耦合性
            }
        },
        components: {
            'v-loadmore': Loadmore
        }
    }
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
    section {
        flex: 1;
        height: 1px;
        overflow: scroll;
        background: #fff;
    }
    .ic{
        font-size: 14px;
        display: inline-block;
        line-height: 18px;
        .icon-xialashuaxin3{
            display: inline-block;
            transition: all .2s;
            font-size: 20px;
            height: 20px;
            line-height: 20px;
            
        }
    }
    .t{
        font-size: 14px;
        display: inline-block;
        line-height: 22px;
        .icon-xialashuaxin{
            display: inline-block;
            font-size: 26px;
            height: 26px;
            line-height: 26px;
            color: #20a0ff;
            margin-top: 4px;
            animation: rotation .5s linear infinite;
        }
    }
    .no-data{
        line-height: 36px;
        text-align: center;
    }
    .rotate{
        transform: rotate(180deg)
    }
    @keyframes rotation{
        from {transform: rotate(0deg);transform-origin:50% 50%}
        to {transform: rotate(360deg);transform-origin:50% 50%}
    }   
</style>
