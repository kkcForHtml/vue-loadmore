    <template>
        <div class="home main-view">
            <v-header></v-header>
            <router-link to="/home/list">
                <mt-button type="primary">上拉刷新</mt-button>
            </router-link>
            <router-link to="/home/infinitelist">
                <mt-button type="danger">无限滚动</mt-button>
            </router-link>
            <div class="big">
                <div slot="test" v-for="(item,index) in arr" :key="index">
                    <div>{{item.name | test(index+1)}}</div>
                </div>
<el-date-picker v-model="value1" :editable="false" format="MM 月 dd 日" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
    </el-date-picker>
            </div>
        </div>
    </template>

    <script>
        import vHeader from '@/components/header';
        import { mapMutations } from 'vuex';

        export default {
            data () {
                return {
                    arr:[],
                    pickerOptions0:{
                        disabledDate(time) {
                            return time.getTime() < Date.now() - 8.64e7 ||time.getTime() > Date.now() + 8.64e7*30;
                        }
                    },
                    value1:''
                }
            },
            methods: {
                ...mapMutations('base',['changeStaticValue'])
            },
            mounted () {
                this.changeStaticValue({
                    name:'header_name',
                    newValue:'首页'
                })
                this.changeStaticValue({
                    name:'link',
                    newValue:'/'
                })

                this.$axios({
                    url:'/mock/testData.json'
                }).then(data=>{
                    this.arr = data.data.slice(0,5);
                })
               // console.log(DatePicker);
                console.log(vHeader);
           },
           components:{
               'v-header':vHeader,
               //'el-date-picker':DatePicker
           }
        }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
        .home{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .big{
                flex:1;
            }
        }
    </style>
