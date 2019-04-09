<template>
  <div v-if="datas">
    <div class="detail-top padding bg-white">
      <div class="detail-top-left">
        <h1><span v-for="(item, index) in datas.name" :key="index">{{item}}</span></h1>
        <p>繁体：<span v-for="(item, index) in nameArr.ft" :key="index">{{item}}</span></p>
        <p>简笔笔画： <span v-for="(item, index) in nameArr.jbbh" :key="index"> {{item}}</span></p>
        <p>繁笔笔画： <span v-for="(item, index) in nameArr.ftbh" :key="index"> {{item}}</span></p>
      </div>
      <div class="detail-top-right">
        <div class="score">{{datas.sc[1]}}<span>分</span></div>
        <div>名字吉祥度超越了全国<span>{{datas.sc[2]}}%</span>的用户</div>
      </div>
    </div>

    <div class="cu-bar bg-white margin-top  solid-bottom">
      <div class="action">
        <text class="icon-title text-blue"></text>三才解析
      </div>
    </div>
    <div class="padding-sm bg-white flex flex-wrap text-content">
      <ul>
        <li>三才配置：【{{datas.sc[4]}}】</li>
        <li>吉凶分析：【{{datas.sc[0]}}】</li>
        <li>命格简批：{{datas.sc[3]}}</li>
      </ul>
    </div>

    <div class="cu-bar bg-white margin-top  solid-bottom">
      <div class="action">
        <text class="icon-title text-blue"></text>姓名学解析
      </div>
    </div>
    <div class="padding-sm bg-white flex flex-wrap text-content xmx">
      <dl>
        <dt class="bg-brown">
          <div class="left">字</div>
          <div class="right">姓名学解析</div>
        </dt>
        <dd v-for="(item, index) in nameArr.xmx" :key="index">
          <div class="left">{{item.name}}</div>
          <div class="center">{{item.daji_mean}}</div>
          <div class="right">({{item.daji}})</div>
        </dd>
      </dl>
    </div>

    <div class="cu-bar bg-white margin-top  solid-bottom">
      <div class="action">
        <text class="icon-title text-blue"></text>五格暗示
      </div>
    </div>
    <div class="padding-sm bg-white flex flex-wrap text-content wgas">
      <dl>
        <dt class="bg-brown">人格</dt>
        <dd>
          <p v-for="(item, index) in datas.wgas.rg" :key="index" v-if="item">{{item}}】</p>
        </dd>
      </dl>
      <dl>
        <dt class="bg-brown">地格</dt>
        <dd>
          <p v-for="(item, index) in datas.wgas.dg" :key="index" v-if="item">{{item}}】</p>
        </dd>
      </dl>
      <dl>
        <dt class="bg-brown">外格</dt>
        <dd>
          <p v-for="(item, index) in datas.wgas.wg" :key="index" v-if="item">{{item}}】</p>
        </dd>
      </dl>
      <dl>
        <dt class="bg-brown">总格</dt>
        <dd>
          <p v-for="(item, index) in datas.wgas.zg" :key="index" v-if="item">{{item}}】</p>
        </dd>
      </dl>
    </div>

    <div class="cu-bar bg-white margin-top  solid-bottom">
      <div class="action">
        <text class="icon-title text-blue"></text>五格解析
      </div>
    </div>
    <div class="padding-sm bg-white flex flex-wrap text-content wgjx">

      <h2 class="text-lg text-orange">天格 <span class="text-red text-bold">{{datas.wuge.tg.mark}}</span> 的解析</h2>
      <div class="max-info text-black">{{datas.wuge.tg.info[0]}} <span class="text-red">【{{datas.wuge.tg.info[1]}}】</span></div>
      <ul>
        <li v-for="(item,index) in datas.wuge.tg.analyze" :key="index"><span>{{index}}</span>：{{item}}</li>
      </ul>
      <div class="min-info">天格：又称先格，是祖先留下来的，对人生影响不大。</div>

      <h2 class="wgjx-title text-lg text-orange">人格 <span class="text-red text-bold">{{datas.wuge.rg.mark}}</span> 的解析</h2>
      <div class="max-info text-black">{{datas.wuge.rg.info[0]}} <span class="text-red">【{{datas.wuge.rg.info[1]}}】</span></div>
      <ul>
        <li v-for="(item,index) in datas.wuge.rg.analyze" :key="index"><span>{{index}}</span>：{{item}}</li>
      </ul>
      <div class="min-info">人格：又称主格，是姓名的中心点，主管人一生命运。</div>

      <h2 class="wgjx-title text-lg text-orange">地格 <span class="text-red text-bold">{{datas.wuge.dg.mark}}</span> 的解析</h2>
      <div class="max-info text-black">{{datas.wuge.dg.info[0]}} <span class="text-red">【{{datas.wuge.dg.info[1]}}】</span></div>
      <ul>
        <li v-for="(item,index) in datas.wuge.dg.analyze" :key="index"><span>{{index}}</span>：{{item}}</li>
      </ul>
      <div class="min-info">地格：又称前运，是前半生的命运，会影响中年以前。</div>

      <h2 class="wgjx-title text-lg text-orange">外格 <span class="text-red text-bold">{{datas.wuge.wg.mark}}</span> 的解析</h2>
      <div class="max-info text-black">{{datas.wuge.wg.info[0]}} <span class="text-red">【{{datas.wuge.wg.info[1]}}】</span></div>
      <ul>
        <li v-for="(item,index) in datas.wuge.wg.analyze" :key="index"><span>{{index}}</span>：{{item}}</li>
      </ul>
      <div class="min-info">地格：又称灵运，主管命运之灵力、社交能力和智慧。</div>

      <h2 class="wgjx-title text-lg text-orange">总格 <span class="text-red text-bold">{{datas.wuge.zg.mark}}</span> 的解析</h2>
      <div class="max-info text-black">{{datas.wuge.zg.info[0]}} <span class="text-red">【{{datas.wuge.zg.info[1]}}】</span></div>
      <ul>
        <li v-for="(item,index) in datas.wuge.zg.analyze" :key="index"><span>{{index}}</span>：{{item}}</li>
      </ul>
      <div class="min-info">总格：又称后运，是后半生的命运，会影响中年到老年。</div>
    </div>

    <div class="padding flex flex-direction">
      <button class='cu-btn bg-red margin-tb-sm lg' open-type="share">分享给朋友</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        datas: null,
        xing: '',
        ming: '',
        nameArr: null
      }
    },
    mounted () {
      let {xing, ming} = this.$root.$mp.query
      this.xing = xing || '王'
      this.ming = ming || '飞'
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        wx.showLoading({
          title: '加载中'
        })
        wx.request({
          url: `https://www.ruiwen.com/wechat_miniapp/json/mingzi.php?app=mzdf&firstname=${self.xing}&lastname=${self.ming}`,
          success (res) {
            wx.hideLoading()
            self.datas = res.data
            let {name, relate, zi} = res.data
            const ft = []
            const jbbh = []
            const ftbh = []
            const xmx = []
            name.forEach(v => {
              ft.push(relate[v])
              jbbh.push(zi[v].bihua_easy)
              ftbh.push(zi[v].bihua)
              xmx.push({
                name: v,
                daji_mean: zi[v].daji_mean,
                daji: zi[v].daji
              })
            })
            self.nameArr = {
              ft,
              jbbh,
              ftbh,
              xmx
            }
          }
        })
      }
    },
    onShareAppMessage () {
      return {
        title: `有人@你，我的名字吉祥度超越了全国${this.datas.sc[2]}%的用户,你也来测测吧~`,
        path: `/pages/grade/main`
      }
    }
  }
</script>

<style lang="less" scoped>
  .detail-top{
    display: flex;
    line-height: 1.5;
    .detail-top-left{
      flex: 1;
      h1{
        text-align: left;
      }
    }
    .detail-top-right{
      width: 240rpx;
      text-align: center;
      span{
        color: #e54d42;
      }
      .score{
        border-radius: 50%;
        border: #e54d42 solid 2rpx;
        line-height: 100rpx;
        height: 100rpx;
        width: 100rpx;
        font-size: 38rpx;
        display: block;
        margin: 0 auto 10px;
        color: #e54d42;
        span{
          font-size: 28rpx;
        }
      }
    }
  }
  .xmx{
    dl{
      border: #cccccc solid 1px;
      border-bottom: none;
      display: flex;
      flex-direction: column;
      width: 100%;
      dt{
        display: flex;
        >div{
          padding-top: 15rpx;
          padding-bottom: 15rpx;
        }
        .left{
          width: 80rpx;
          text-align: center;
          border-right: #cccccc solid 1px;
        }
        .right{
          flex: 1;
          padding:15rpx;
        }
      }
      dd{
        display: flex;
        >div{
          padding-top: 15rpx;
          padding-bottom: 15rpx;
        }
        .left{
          width: 80rpx;
          text-align: center;
          border-right: #cccccc solid 1px;
          border-bottom: #cccccc solid 1px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .center{
          padding:15rpx;
          flex: 1;
          border-right: #cccccc solid 1px;
          border-bottom: #cccccc solid 1px;
        }
        .right{
          width: 150rpx;
          border-bottom: #cccccc solid 1px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .wgas{
    dl{
      border: #cccccc solid 1px;
      border-bottom: none;
      display: flex;
      flex-direction: column;
      width: 100%;
      dt{
        text-align: center;
        padding: 10rpx 0;
      }
      dd{
        padding: 15rpx;
      }
      &:last-child{
        border-bottom: #cccccc solid 1px;
      }
    }
  }
  .wgjx{
    h2{
      margin-bottom: 10rpx;
      padding-top: 15rpx;
    }
    ul{
      padding-bottom: 20rpx;
      li{
        span{
          font-weight: bold;
        }
      }
    }
    .min-info{
      color: #999;
    }
  }
</style>
