<template>
  <div class="container">
    <button open-type="getUserInfo" @getuserinfo="getuserinfo">登录</button>
    <button @tap="getWeRunData">{{step ? '今日运动步数:'+step : '获取微信步数'}}</button>
    <div v-for="(item, index) in 5" wx:key>
      <Dynamic></Dynamic>
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
          icon: 'success',
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



