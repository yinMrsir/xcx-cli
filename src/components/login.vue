<template>
  <div :class="(isShow && !userInfo) ? 'cu-modal show' : 'cu-modal'">
    <div class="cu-dialog">
      <div class="cu-bar justify-end">
        <div class='content'>登录提示</div>
        <div class='action' bindtap='hideModal'>
          <text class='icon-close text-red'></text>
        </div>
      </div>
      <div class='padding-xl'>
        为了您更好的体验，请先登录~
      </div>
      <div class="cu-bar">
        <div class='action margin-0 flex-sub text-green solid-left' @tap='setLoginModelStatus'>取消</div>
        <button class='action margin-0 flex-sub  solid-left' open-type="getUserInfo" @getuserinfo='getuserinfo'>确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {GlobalApi} from '../api'
  import store from '../vuex/store'

  export default {
    computed: {
      userInfo () {
        return store.state.userInfo
      }
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      setLoginModelStatus () {
        this.isShow = !this.isShow
      },
      async getuserinfo (e) {
        let data = await GlobalApi.login(e.mp.detail)
        if (data) {}
      }
    }
  }
</script>