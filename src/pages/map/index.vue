<template>
  <div>
    <map id="map" :longitude="longitude" :latitude="latitude" scale="14" :controls="controls"  :markers="markers" :polyline="polyline"
         @end="regionchange"
         @begin="regionchange"
         @regionchange="regionchange"
         show-location style="width: 100%; height: 600px;"></map>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mapContext: null,
        longitude: '',
        latitude: '',
        markers: [{
          iconPath: require('../../images/maker.png'),
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 16,
          height: 34
        }]
      }
    },
    methods: {
      regionchange (e) {
        let MapContext = wx.createMapContext('map')
        if (e.type === 'end') {
          MapContext.getCenterLocation({
            success (res) {
              MapContext.translateMarker({
                markerId: 0,
                destination: {
                  longitude: res.longitude,
                  latitude: res.latitude
                }
              })
            }
          })
        }
      }
    },
    created () {
      var self = this
      wx.getLocation({
        type: 'gcj02',
        success (res) {
          console.log(res)
          let {longitude, latitude} = res
          self.longitude = longitude
          self.latitude = latitude
        }
      })
    }
  }
</script>

<style lang="less" scoped>
</style>