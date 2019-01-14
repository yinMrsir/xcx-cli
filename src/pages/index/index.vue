<template>
  <div>
    <div class="cu-card dynamic no-card">
      <div class="cu-item shadow" v-for="item in 5">
        <div class="cu-list menu menu-avatar">
          <div class="cu-item">
            <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
            <div class='content flex-sub'>
              <div>晓晓萌</div>
              <div class='text-gray text-sm flex justify-between'>
                2018年12月3日
              </div>
            </div>
          </div>
        </div>
        <div class='text-content'>
          你们的铲屎官是不是经常突然对手机傻笑？我家铲屎官常常坐沙发上笑的发抖！（暗中观察.jpg）
        </div>
        <!--<div class="grid 'col-3 grid-square' flex-sub padding-lr">
          <div class="bg-img only-img" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);">
          </div>
        </div>-->
        <div class='text-gray text-sm text-right padding'>
          <text class="icon-attentionfill"></text> 10
          <text class="icon-appreciatefill"></text> 20
          <text class="icon-messagefill"></text> 30
        </div>
        <div class="cu-list menu menu-avatar comment solids-top">
          <div class="cu-item">
            <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
            <div class='content'>
              <div class='text-grey'>猪皮蛋</div>
              <div class='text-gray text-content text-df'>
                我家铲屎官不舔毛，还抠脚！
              </div>
              <div class='margin-top-sm flex justify-between'>
                <div class='text-gray text-df'>2018年12月4日</div>
                <div>
                  <text class="icon-appreciatefill text-red"></text>
                  <text class="icon-messagefill text-gray margin-left-sm"></text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dynamic from '../../components/dynamic'
import store from '../../vuex/store'
import {GlobalApi} from '../../api'

export default {
  computed: {
    userInfo () {
      return store.state.userInfo
    }
  },
  components: {
    Dynamic
  },
  data () {
    return {
      step: 0
    }
  },
  methods: {
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

<style>
  .cu-card.no-card>.cu-item{
    margin-top: 30rpx;
  }
</style>



