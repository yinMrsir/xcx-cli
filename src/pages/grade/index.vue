<template>
  <div>
    <section class="tool-detail dis-bot">
      <h1>姓名打分</h1>
      <div class="m-section">姓氏</div>
      <div class="m-input">
        <input type="text" :value="xing" placeholder="请输入姓氏" @input="bindXingChange">
      </div>
      <div class="m-section">名</div>
      <div class="m-input">
        <input type="text" :value="ming" placeholder="请输入名" @input="bindMingChange">
      </div>
      <div class="m-work">
        <button @click="bindSubmitHander">立即打分</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        xing: '',
        ming: ''
      }
    },
    methods: {
      bindChangeType (index) {
        this.currIndex = index
        this.isHiddenResult = true
      },
      bindChangeSex (index) {
        this.currSexIndex = index
        this.isHiddenResult = true
      },
      bindXingChange (e) {
        this.xing = e.mp.detail.value
      },
      bindMingChange (e) {
        this.ming = e.mp.detail.value
      },
      bindSubmitHander () {
        var self = this
        if (this.chk()) {
          wx.navigateTo({
            url: `/pages/detail/main?xing=${self.xing}&ming=${self.ming}`
          })
        }
      },
      chk () {
        if (this.xing.length < 1) {
          showTopTip('你什么都不输入，让我们很为难的…')
          return false
        } else if (this.xing.length > 2) {
          showTopTip('客官，姓氏不支持那么长滴！')
          return false
        } else if (this.ming.length < 1) {
          showTopTip('名还没输入呢，让我们很为难的…')
          return false
        } else if (this.ming.length > 2) {
          showTopTip('客官，名不支持那么长滴！')
          return false
        } else {
          return true
        }
      }
    }
  }

  function showTopTip (text) {
    wx.showToast({
      title: text,
      icon: 'none',
      duration: 2000
    })
  }
</script>

<style lang="less">
  .select-box{
    display: flex;
    padding: 20rpx;
    .item {
      flex: 1;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      color: #333;
      border: 1px #DDDDDD solid;
      &.active{
        border: 1px #FD8181 solid;
      }
    }
  }
  .jresult-name{
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 20%;
        border: 1px solid #DEF5F2;
        text-align: center;
      }
    }
  }
  table th, table td{border:1px solid #DEF5F2;}
</style>
