<template lang="pug">
  .chat
    scroll-view.content(scroll-y @tap="hideFaceIcon" :scroll-into-view="viewId" scroll-with-animation)
      div(v-for="(item, index) in msgList" wx:key :id="'item'+index")
        ChatItem(:item="item")
    .footer(:class="showFaceIcon ? 'active' : ''")
      .f-top
        input(:value="text" @input="bindInput" placeholder="请输入内容")
        button(@tap="submitVideo") 视频
        button(@tap="submitImg") 图片
        button(@tap="submit") 提交
      .f-bottom
    video(:src="videoUrl" id="myVideo" controls v-if="showVideo" @fullscreenchange="bindfullscreenchange")
</template>

<script>
  import ChatItem from '../../components/chatItem'

  export default {
    components: {
      ChatItem
    },
    data () {
      return {
        viewId: '',
        showFaceIcon: false,
        videoUrl: '',
        videoContext: null,
        showVideo: false,
        text: '',
        msgList: []
      }
    },
    methods: {
      hideFaceIcon () {
        this.showFaceIcon = false
      },
      selectFaceIcon () {
        this.showFaceIcon = true
      },
      bindInput (e) {
        this.text = e.mp.detail.value
      },
      submit () {
        let obj = {
          isMy: Math.random() > 0.5 ? 0 : 1,
          type: 'text',
          content: this.text
        }
        this.msgList.push(obj)
        this.text = ''
        this.viewId = 'item' + (this.msgList.length - 1)
      },
      submitImg () {
        let obj = {
          isMy: Math.random() > 0.5 ? 0 : 1,
          type: 'img',
          url: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19010919'
        }
        this.msgList.push(obj)
        this.viewId = 'item' + (this.msgList.length - 1)
      },
      submitVideo () {
        let obj = {
          isMy: Math.random() > 0.5 ? 0 : 1,
          type: 'video',
          url: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19010919',
          videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
        }
        this.msgList.push(obj)
        this.viewId = 'item' + (this.msgList.length - 1)
      },
      bindfullscreenchange (e) {
        if (e.mp.detail.fullScreen) {
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      },
      setShowVideo (str) {
        this.videoContext = wx.createVideoContext('myVideo')
        this.videoUrl = str
        this.showVideo = true
        this.videoContext.requestFullScreen()
        this.videoContext.play()
      }
    },
    created () {
    }
  }
</script>

<style lang="less" scoped>
.chat{
  >video{
    transform: translateX(-100%);
  }
  >.content{
    position: fixed;
    bottom: 90rpx;
    left: 0;
    top: 0;
    width: 100%;
  }
  .footer{
    height: 300rpx;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: #dedede solid 1px;
    display: flex;
    flex-direction: column;
    transform: translateY(210rpx);
    &.active{
      transform: translateY(0);
    }
    .f-top{
      display: flex;
      height: 90rpx;
      border-bottom: #dedede solid 1px;
      input{
        padding: 20rpx;
        font-size: 26rpx;
        flex: 1;
        width: auto;
        height: 90rpx;
        line-height: 90rpx;
        box-sizing: border-box;
        display: inline-block;
      }
      button{
        width: 140rpx;
        display: inline-block;
      }
    }
    .f-bottom{
      flex: 1;
    }
  }
}
</style>