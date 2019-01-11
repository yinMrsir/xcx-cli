<template lang="pug">
  .container
    button(open-type="getUserInfo" @getuserinfo="getuserinfo") 登录
    button(@tap="getWeRunData") {{step ? '今日运动步数:'+step : '获取微信步数'}}
    navigator.box(url="/pages/chat/main") 聊天室DEMO
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
  .box{
    padding: 20rpx;
    text-align: center;
  }
</style>



