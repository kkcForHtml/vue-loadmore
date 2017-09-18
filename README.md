# 介绍

> 基于vue-cli + mint-ui封装一套下拉刷新和无限滚动
```html
<scroll-view
    @changeScrollViewData="resScrollChange"
    :url="url"     //后台接口
    :limit="limit" //每次返回条目数
    :total="total"> //总条目数（真实接口可不填）
    <ul slot="container">
        <li v-for="(item, index) in arr" :key="index" v-alert="item.url">{{item.url}}</li>
    </ul>
</scroll-view>

```

> 用mockjs + express模拟了后台翻页效果

```javascript
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/mock/test', function (req, res) {
    var params = req.body;
    var total = params.total;
    var index = 0,
        id = 0;
    if (params.page == 1) {
        index = total > 20 ? 20 : total; //第一页20条数据
        id = 1;
    } else {
        index = (params.page - 1) * params.limit + 20 < total ? params.limit : total - (params.page - 2) * params.limit - 20;
        id = (params.page - 2) * params.limit + 20;
    }
    var key = 'res|' + index;
    var mockData = Mock.mock({
        [key]: [{
            'id|+1': id,
            'url': '@url()',
            'admin': '@domain()',
            'time': '@datetime()',
            'test': {
                'timeAdmin': '@image()'
            }
        }],
        total
    });

    res.send(mockData);
})
```
具体代码见 [build/dev-server.js](https://github.com/kkcForHtml/loadmore/blob/master/build/dev-server.js)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
觉得有用的话给个star噢~~
