<script>
  export default {
    created () {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
    }
  }
</script>

<style lang="less">
  @import "style/icon.css";
  @import "style/colorUi.css";
  page{
    background: #f1f1f1;
  }
</style>
