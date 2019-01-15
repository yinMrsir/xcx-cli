<template>
  <div>
    <swiper :class="DotStyle?'card-swiper square-dot':'card-swiper round-dot'" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
      <swiper-item v-for="(item, index) in 4" :class="cardCur==index?'cur':''" :key="index">
        <div class='bg-img shadow-blur' :style="'background-image:url(https://image.weilanwl.com/img/4x3-'+(index+1)+'.jpg)'"></div>
      </swiper-item>
    </swiper>

    <div class="cu-card dynamic no-card">
      <navigator class="cu-item shadow" url="/pages/need-detail/main">
        <div class="cu-list menu menu-avatar">
          <div class="cu-item">
            <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
            <div class='content flex-sub'>
              <div>晓晓萌</div>
              <div class='text-gray text-sm flex justify-between'>
                2018年12月3日
              </div>
              <div class="address">合作地区：不限</div>
            </div>
          </div>
        </div>
        <div class="dtitle">护肤品品牌寻找有资源的平台，以CPS合作后可提供大量实物赞助</div>
        <div class='text-content'>
          有资源的平台，或者其他能转化销售的资源，按CPS合作。比如线上商城平台，内容营销平台等...
        </div>
        <div class='text-gray text-sm text-right padding'>
          <text class="icon-attentionfill"></text> 10
          <text class="icon-appreciatefill"></text> 20
          <text class="icon-messagefill"></text> 30
        </div>
      </navigator>

      <navigator class="cu-item shadow">
        <div class="cu-list menu menu-avatar">
          <div class="cu-item">
            <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
            <div class='content flex-sub'>
              <div>晓晓萌</div>
              <div class='text-gray text-sm flex justify-between'>
                2018年12月3日
              </div>
              <div class="address">合作地区：不限</div>
            </div>
          </div>
        </div>
        <div class="dtitle">提供费用/免费试听劵，寻求北京高校资源/有年轻群体的资源合作</div>
        <div class='text-content'>
          具有高校用户、年轻用户群体的平台，都可合作。 1、北京高校资源，各种社群、社团、联盟等资源...
        </div>
        <div class='text-gray text-sm text-right padding'>
          <text class="icon-attentionfill"></text> 10
          <text class="icon-appreciatefill"></text> 20
          <text class="icon-messagefill"></text> 30
        </div>
      </navigator>

      <navigator class="cu-item shadow">
        <div class="cu-list menu menu-avatar">
          <div class="cu-item">
            <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
            <div class='content flex-sub'>
              <div>晓晓萌</div>
              <div class='text-gray text-sm flex justify-between'>
                2018年12月3日
              </div>
              <div class="address">合作地区：不限</div>
            </div>
          </div>
        </div>
        <div class="dtitle">提供费用/免费试听劵，寻求北京高校资源/有年轻群体的资源合作</div>
        <div class='text-content'>
          具有高校用户、年轻用户群体的平台，都可合作。 1、北京高校资源，各种社群、社团、联盟等资源...
        </div>
        <div class='text-gray text-sm text-right padding'>
          <text class="icon-attentionfill"></text> 10
          <text class="icon-appreciatefill"></text> 20
          <text class="icon-messagefill"></text> 30
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



