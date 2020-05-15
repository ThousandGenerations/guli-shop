/* 
由于我们的项目中有很多的接口,每次用到的时候都在不同的组件中调用要麻烦了,所以我们在 api 文件夹下封装一个包含项目中所有接口请求函数的模块
注意:
    每个请求函数的返回值都是 promise
*/
//1 引入我们封装好的(创建的新的 axios 实例),也就是 ajax 文件
import ajax from './ajax';
import mockAjax from './mockAjax'

//下面就是项目中用到的所有请求接口函数
//所有接口都是以 api 开头

/* 
    请求获取三级分类列表 
    url:  /api/product/getBaseCategoryList
*/
// export function reqBaseCategoryList() { //起名风格最好一致
//     //可以返回一个对象形式或者函数形式的请求
//     // 函数调用形式   第一个参数是 url  如果是 get 请求可以写也可以不写.get
//     return ajax.get('/product/getBaseCategoryList')

//     //配置对象形式
//     // return ajax({
//     //     method: 'GET', //发送 get 请求
//     //     url: '/product/getBaseCategoryList', //url请求地址
//     // })
// }
export const reqBaseCategoryList = () => ajax.get('/product/getBaseCategoryList')



//轮播和楼层的请求函数

export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')


//search组件请求 相关配置
//根据搜索的条件参数对象获取商品列表数据   
export const reqProductList = (searchParams) => ajax({
    url: '/list', //url
    method: 'POST', //类型
    data: searchParams //参数
})

//search组件请求 相关配置
//根据商品的条件参数对象获取商品详情数据   
//    /api/item/{skuId}
export const reqProduct = (skuId) => ajax.get(`/item/${skuId}`)
// reqProduct(6)


/* 
添加到购物车
/api/cart/addToCart/{ skuId }/{ skuNum }
*/
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)
// reqAddToCart()

//购物车列表相关api
export const reqCartList = () => ajax('/cart/cartList')
// reqCartList()

//切换商品选中状态
export const reqCheckCartItem = (skuId, isChecked) => ajax(`/cart/checkCart/${skuId}/${isChecked}`)


/* 
删除购物车商品
/api/cart/deleteCart/{skuId} DELETE
*/
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)
// reqDeleteCartItem()
/* export const reqDeleteCartItem = () => ajax({
  url: `/cart/deleteCart/${skuId}`,
  method: 'DELETE'
}) */


/* 
请求注册
/api/user/passport/register  POST
*/
// export const reqRegister = ({mobile, password, code}) => ajax.post('/user/passport/register', {mobile, password, code})
export const reqRegister = (userInfo) => ajax.post('/user/passport/register', userInfo)


/* 
请求登陆
/api/user/passport/login
POST
*/
export function reqLogin(mobile, password) {
    return ajax({
        method: 'POST',
        url: '/user/passport/login',
        data: {
            mobile,
            password
        }
    })
}

/* 
退出登陆
/api/user/passport/logout
*/
export const reqLogout = () => ajax('/user/passport/logout')
// reqLogout()


/* 
获取我的订单列表
/api/order/auth/{page}/{limit}  GET
*/
export const reqMyOrders = (page, limit) => ajax(`/order/auth/${page}/${limit}`)

// reqMyOrders(1, 3)