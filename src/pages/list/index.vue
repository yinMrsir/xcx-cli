<template>
  <div class="continer eatlist">
    <div class="item" v-for="item in names" :key="item.id" @tap="goDetail(item.name)">
      <div class="right">
        <div class="title">{{item.name}}</div>
        <div class="tag">
          <span class="cu-tag bg-red light">{{xing}}</span>
          <span class="cu-tag bg-blue light">{{sex==0 ? '女' : '男'}}</span>
          <span class="cu-tag bg-orange light">{{wordsCount == 1 ? '单名' : '双名'}}</span>
          <span class="cu-tag bg-green light">公立 {{time}}</span>
        </div>
      </div>
      <span class="icon-right"></span>
    </div>
    <div class="cu-load loading"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        names: [],
        wordsCount: '',
        sex: '',
        xing: '',
        time: ''
      }
    },
    mounted () {
      let {wordsCount, sex, xing, time} = this.$root.$mp.query
      this.wordsCount = wordsCount
      this.sex = sex
      this.xing = xing
      this.time = time
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        wx.request({
          url: `https://wx.yinchunyu.com/xcx/ymt/intitleJsonForWap`,
          data: {
            wordsCount: self.wordsCount,
            sex: self.sex,
            xing: self.xing
          },
          success (res) {
            let {names} = res.data.result
            self.names = self.names.concat(names)
          }
        })
      },
      goDetail (name) {
        let ming = name.replace(this.xing, '')
        wx.navigateTo({
          url: `/pages/detail/main?xing=${this.xing}&ming=${ming}`
        })
      }
    },
    onReachBottom () {
      this.getData()
    }
  }
</script>

<style lang="less" scoped>
  .eatlist {
    padding: 20rpx;
    background: #fff;
    .item {
      display: flex;
      border-bottom: #ccc solid 1px;
      padding: 25rpx 0;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 20rpx;
        color: #999;
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-size: 36rpx;
          margin-bottom: 30rpx;
        }
        .tag {
          color: #999;
          span {
            padding-right: 20rpx;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
