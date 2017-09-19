    <template>
        <div class="home main-view">
            <v-header></v-header>
            <div class="big">
                <router-link to="/home/list">
                    <mt-button type="primary">上拉刷新</mt-button>
                </router-link>
                <router-link to="/home/infinitelist">
                    <mt-button type="danger">无限滚动</mt-button>
                </router-link>
            </div>
        </div>
    </template>

    <script>
        import { mapMutations } from 'vuex';

        export default {
            data () {
                return {
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
                display: flex;
                justify-content: center;
                align-items: center;
                a{
                    margin-left: 10px;
                }
            }
        }
    </style>
