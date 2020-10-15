<template>
  <div class="map">
    <div
      ref="mapbox"
      id="chart"
      style="height:700px; width:800px; margin: 0 auto;"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
import jsonp from "jsonp";

const option = {
  title: {
    text: "疫情地图",
    x: "center", //居中
    textStyle: {
      color: "#9c0505"
    }
  },
  series: [
    {
      type: "map", //告诉echarts 渲染地图
      map: "china",
      label: {
        show: true, //是否显示各个省份名称
        color: "#eee", //文字颜色
        fontSize: 10 //文字大小
      },
      itemStyle: {
        //地图区域多边形 图形样式
        borderColor: "#ccc", //地图边框颜色
        borderWidth: 1, //地图边框大小
        areaColor: "#fff" //区域的背景颜色
      },
      emphasis: {
        //高亮状态下的多边形和标签样式
        //控制地图划过的颜色
        label: {
          color: "#fff", //移入后显示颜色
          fontSize: 12
        },
        //控制鼠标滑过时的高亮样式
        itemStyle: {
          //移入后颜色和边框
          areaColor: "green", //区域颜色
          borderWidth: "yellow" //边框颜色
        }
      },
      zoom: 1.2 //控制地图的大小
    }
  ],
  visualMap: [
    {
      type: "piecewise",
      show: true,
      splitNumber: 6,
      pieces: [
        {
          min: 10000
        }, // 不指定 max，表示 max 为无限大（Infinity）。
        {
          min: 1000,
          max: 9999
        },
        {
          min: 100,
          max: 999
        },
        {
          min: 10,
          max: 99
        },
        {
          min: 1,
          max: 9
        },
        {
          min: 0,
          max: 0
        }
      ],
      //align:'right' // 默认是left
      inRange: {
        //定义选中范围中的视觉元素
        // symbol: "rect",
        color: ["#fff", "#ffaa85", "#ff7b69", "#cc2929", "#8c0d0d", "#660208"] //颜色可以实时在地图上取
      },
      itemHeight: 10, //显示框的宽高
      itemWidth: 10
    }
  ],
  tooltip: {//提示信息
    tigger: "item",
    //地图:{a}系列名称,{b}区域名称,{c}合并数据,{d}无
    formatter: "地区: {b}<br />确诊: {c}"
    // position: function (pos, params, dom, rect, size) {
    //       // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
    //       var obj = {top: 60};
    //       obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
    //       return obj;
    //   }
  },
  toolbox: {
    //工具栏 下载 刷新
    show: false,
    orient: "horizontal", //工具栏 icon的布局朝向
    left: "right", //右上角
    top: "top",
    feature: {
      dataView: { readOnly: false }, //数据视图工具,可以展现当前图表所用的数据,编辑后可以动态更新
      restore: {}, //配置项完成
      saveAsImage: {} //保存为图片
    }
  }
};
export default {
  name: "MapMain",
  props: {},
  data() {
    return {
      mychart: ""
    };
  },
  computed: {},
  created() {},
  beforeDestroy() {},
  mounted() {
    this.getData();
    this.mychart = echarts.init(this.$refs.mapbox); //获取mapbox盒子
    this.mychart.setOption(option);
  },
  watch: {},
  methods: {
    getData() {
      jsonp(
        "http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
        {},
        (erros, data) => {
          //   console.log(data);
          //   console.log(data.data.list)
          var lists = data.data.list.map(item => {
            return {
              name: item.name,
              value: item.value
            };
          });
          console.log(lists);
          option.series[0].data = lists;
          this.mychart.setOption(option);
        }
      );
    }
  }
};
</script>

<style scoped lang="stylus">

</style>
