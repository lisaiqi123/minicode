<template>
  <div class="content">
    <div class="head fl-column-centerBottom">
      <div class="menu">
        <div class="left fl-row-justy">
          <i class="iconfont iconpingfen"></i>
          <input type="text">
          <span>呵呵</span>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="swiper">
        <swiper class="swipers" :autoplay="false" :current="currentSwiper" @change="swiperChange">  
          <swiper-item v-for="(item,index) in banner" :key="index"  @click="linkToH5('/pages/H5/main',item.url)">
            <image  class="posts-swiper-img" :src='item'></image>
          </swiper-item>
        </swiper>
        <view class="dots">  
            <block v-for="(item,index) in banner" :key="index">  
                <view :class="['dot',index == currentSwiper ? ' active' : '']"></view>  
            </block>  
        </view>   
      </div>
    </div>
  </div>
</template>

<script>
import { apiList, configData, getNoLoad, get, post } from "@/http/api.js";
import { mapState, mapMutations } from "vuex";
export default {
  onLoad() {
  },
  components: {},
  data() {
    return {
      banner:['']
    };
  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 1000);
  },
  computed: {},
  methods: {
     //路由
    setRouter (path,id,n,t,s){
        this.$router.push({ path: path, query: {id: id,name:n,title:t,search:s} })
    },
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.head{
  width: 100%;
  height: .88rem;
  background: transparent;
  z-index: 10;
  .menu{
    height: .44rem;
    width: 100%;
    padding: 0 .15rem;
  }
  .left{
    width: 2.5rem;
    height: .44rem;
    input{
      width: 1.5rem;
      height: .3rem;
      border-radius: .15rem;
      border: 1px solid #ececec;
      background: transparent;
      padding: 0 .1rem;
      font-size: .14rem;
    }
  }
}
// 轮播图
.swiper{
  width: 3.75rem;
  margin: 0 auto;
  position: relative;
  swiper{
    width: 3.75rem;
    height: 1.94rem;
    overflow: hidden;
    box-shadow: 0 3px 5px rgba($color: #ccc, $alpha: .32);
    image{
      width: 3.75rem;
      height: 1.94rem;
      display: block;
      background: #ececec;
    }
  }
  /*用来包裹所有的小圆点  */
  .dots {
    position: absolute;
    bottom: 0.1rem;
    width: 100%;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  /*未选中时的小圆点样式 */
  .dot {
    width: 0.08rem;
    height: 0.08rem;
    border: solid 0.01rem #fff;
    opacity: 0.8;
    margin-right: .08rem;
    border-radius: 50%;
    background-color: transparent;
    &.active {
      background-color: #fff;
    }
  }
}
</style>
