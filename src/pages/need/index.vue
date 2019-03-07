<template>
  <div>
    <div class="cu-bar search">
      <div class='search-form round'>
        <text class="icon-search"></text>
        <input type="text" placeholder="搜索图片、文章" confirm-type="search">
      </div>
      <div class='action'>
        <button class='cu-btn bg-green shadow-blur round'>搜索</button>
      </div>
    </div>

    <!--<swiper :class="DotStyle?'square-dot screen-swiper':'round-dot screen-swiper'" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">-->
      <!--<swiper-item v-for="(item, index) in 4" :key="index">-->
        <!--<img src="https://image.weilanwl.com/img/4x3-1.jpg" mode='aspectFill'>-->
      <!--</swiper-item>-->
    <!--</swiper>-->

    <div class="cu-card dynamic no-card">
      <navigator class="cu-item shadow" url="/pages/need-detail/main" v-for="(item, index) in 1" :key="index">
        <div class="cu-card article">
          <div class="cu-item shadow">
            <div class="title">小程序开发框架wepy教程1-项目构建</div>
            <div class="content">
              <img src="../../images/wepy.jpg" mode="aspectFill">
              <div class="desc">
                <div class='text-content'>WePY框架在开发过程中参考了 Vue 等现有框架的一些语法风格和功能特性...</div>
                <div>
                  <div class='cu-tag bg-red light sm round'>小程序</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </navigator>
    </div>
    <Login></Login>
  </div>
</template>

<script>
import {GlobalApi} from '../../api'
import Login from '../../components/login'

export default {
  components: {
    Login
  },
  data () {
    return {
      cardCur: 0,
      step: 0
    }
  },
  methods: {
    cardSwiper (e) {
      this.cardCur = e.mp.detail.current
    },
    DotStyle (e) {
      this.DotStyle = e.detail.value
    },
    async getuserinfo (e) {
      let data = await GlobalApi.login(e.mp.detail)
      if (data) {
        wx.showToast({
          title: '登录成功',
          icon: 'none',
          duration: 2000
        })
      }
    },
    async getWeRunData () {
      let data = await GlobalApi.getWeRunData()
      let runData = data.stepInfoList
      this.step = runData[runData.length - 1].step
    }
  },

  created () {
  }
}
</script>

<style lang="less" scoped>
  .cu-card.no-card>.cu-item{
    margin-top: 30rpx;
  }
  .dtitle{
    font-size: 36rpx;
    font-weight: bold;
    padding:15rpx 30rpx;
    line-height: 1.5;
  }
  .address{
    position: absolute;
    right: 30rpx;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 26rpx;
  }
</style>



