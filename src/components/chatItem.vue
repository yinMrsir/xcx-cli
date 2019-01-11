<template lang="pug">
  .chat-item(:class="item.isMy ? 'active' : ''")
    .userhead
      img
    .text-box(v-if="item.type === 'text'")
      .content {{item.content}}
    .img-box(v-if="item.type === 'img' || item.type === 'video'")
      .content(:class="item.type === 'video' ? 'active' : ''"  @tap="setShowVideo(item.type, item.videoUrl)")
        img(:src="item.url")
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
      }
    },
    methods: {
      random () {
        return true
      },
      setShowVideo (type, videoUrl) {
        if (type === 'video') {
          this.$parent.setShowVideo(videoUrl)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .chat-item{
    padding: 15rpx 0 15rpx 120rpx;
    position: relative;
    min-height: 80rpx;

    &.active{
      padding: 15rpx 120rpx 15rpx 0;
      .userhead{
        right: 15rpx;
        top: 15rpx;
        left: auto;
      }
      .text-box{
        display: flex;
        justify-content: flex-end;
        position: relative;
        .content{
          &:after{
            border-color: transparent transparent transparent #18bf19;
            right: -15rpx;
            top: 15rpx;
            left: auto;
          }
        }
      }
      .img-box{
        display: flex;
        justify-content: flex-end;
      }
    }

    .userhead{
      position: absolute;
      left: 15rpx;
      top: 15rpx;
      img{
        width: 80rpx;
        height: 80rpx;
        background: #000;
      }
    }
    .text-box{
      font-size: 30rpx;
      color: #333;
      .content{
        padding: 10rpx 15rpx;
        background: #18bf19;
        color: #fff;
        font-size: 28rpx;
        display: inline-block;
        border-radius: 10rpx;
        position: relative;
        max-width: 600rpx;
        box-sizing: border-box;
        &:after{
          content: '';
          position: absolute;
          border-style: solid;
          border-color: transparent #18bf19 transparent transparent;
          border-width: 10rpx;
          left: -15rpx;
          top: 15rpx;
        }
      }
    }
    .img-box{
      .content{
        position: relative;
        display: inline-block;
        font-size: 0;
        &.active:after{
          content: '';
          display: block;
          position: absolute;
          border-style: solid;
          border-color: transparent transparent transparent #fff;
          border-width: 40rpx 60rpx;
          left: 50%;
          top: 50%;
          transform: translate(-30%, -50%);
        }
        >img{
          width: 300rpx;
          height: 220rpx;
        }
      }
    }
  }
</style>