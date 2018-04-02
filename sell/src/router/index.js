import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Goods from '../components/goods/Goods.vue'
import Seller from '../components/sellers/Seller.vue'
import Ratings from '../components/ratings/Ratings.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', // 修改路由项被点击后添加的类名，原类名为：router-link-active
  routes: [
  // 设置首页路由指向商品页
  	{
  		path: '/',
  	  	component: Goods
  	},
  	{
  		path: '/goods',
  		component: Goods
  	},
  // 设置商家页路由
  	{
  		path: '/seller',
  		component: Seller
  	},
  // 设置评分页路由
  	{
  		path: '/ratings',
  		component: Ratings
  	}
  ]
})
