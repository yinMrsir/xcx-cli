<template>
  <div>
    <section class="tool-detail dis-bot">
      <h1>宝宝免费起名</h1>
      <div class="m-section">宝宝性别</div>
      <div class="select-box">
        <div :class="currSexIndex === index ? 'item active' : 'item'" v-for="(item, index) in sexList" :key="index" @click="bindChangeSex(index)">
          {{item}}
        </div>
      </div>
      <div class="m-section">宝宝的姓氏</div>
      <div class="m-input">
        <input type="text" :value="jfirstName" placeholder="姓氏不超过两个字" @input="bindKeyChange">
      </div>
      <div class="m-section">取名要求</div>
      <div class="select-box">
        <div :class="currIndex === index ? 'item active' : 'item'" v-for="(item, index) in typeList" :key="index" @click="bindChangeType(index)">
          {{item}}
        </div>
      </div>
      <div class="m-section">出生日期</div>
      <div class="m-input">
        <PickerYearDay ref="pickerYearDay"></PickerYearDay>
      </div>
      <div class="m-work">
        <button @click="bindSubmitHander">{{isHiddenResult ? '立即取名' : '换一批'}}</button>
      </div>
      <div class="m-result" :hidden="isHiddenResult">
        <div class="m-result-tit">查询结果</div>
        <div class="m-result-tit" id="JresultTit">适合网姓{{currSexIndex === 0 ? '女' : '男'}}宝宝的{{nameList.length}}个{{currIndex === 0 ? '单' : '双'}}名字</div>
        <div class="jresult-name" style="padding:10px 0;">
          <ul>
            <li v-for="(item, index) in nameList" :key="index">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="padding flex flex-direction">
      <navigator
        target="miniProgram"
        open-type="navigate"
        app-id="wxeecc379dc2b223cb"
        path="/pages/index/main"
        extra-data=""
        version="release" class="class='cu-btn bg-red margin-tb-sm lg' ">
        更多孕妈相关工具
      </navigator>
    </div>

  </div>
</template>

<script>
  import PickerYearDay from '../../components/base/PickerYearDay'
  export default {
    components: {
      PickerYearDay
    },
    data () {
      return {
        isHiddenResult: true,
        currIndex: 0,
        typeList: ['单名', '双名'],
        currSexIndex: 0,
        sexList: ['女宝宝', '男宝宝'],
        nameList: [],
        jfirstName: ''
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
      bindKeyChange (e) {
        this.jfirstName = e.mp.detail.value
      },
      bindSubmitHander () {
        var self = this
        if (this.chk()) {
          let time = self.$refs.pickerYearDay.pickerTime
          wx.navigateTo({
            url: `/pages/list/main?wordsCount=${self.currIndex + 1}&sex=${self.currSexIndex}&xing=${self.jfirstName}&time=${time}`
          })
        }
      },
      chk () {
        if (this.jfirstName.length < 1) {
          showTopTip('你什么都不输入，让我们很为难的…')
          return false
        } else if (!isChinese(this.jfirstName)) {
          showTopTip('抱歉，目前只可以取中文名哦！')
          return false
        } else if (this.jfirstName.length > 2) {
          showTopTip('客官，姓氏不支持那么长滴！')
          return false
        } else {
          return true
        }
      }
    },
    onShareAppMessage () {
      return {
        title: `@你，免费可以宝宝取名咯~快来试试吧~`,
        path: `/pages/index/main`
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

  function isChinese (str) {
    var badChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    badChar += 'abcdefghijklmnopqrstuvwxyz'
    badChar += '0123456789'
    badChar += ' ' + '　'
    badChar += '`~!@#$%^&()-_=+]\\|:;"\\\'<,>?/'
    if (str === '') {
      return false
    }
    for (var i = 0, l = str.length; i < l; i++) {
      var c = str.charAt(i)
      if (badChar.indexOf(c) > -1) {
        return false
      }
    }
    return true
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
