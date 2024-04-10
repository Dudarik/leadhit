<template>
  <div class="chart" ref="chartdiv"></div>
</template>
<script lang="ts">
/* eslint-disable */
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { data } from "./chartData";

export default {
  name: "HelloWorld",
  data() {
    return {
      root: am5.Root,
    };
  },
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv as HTMLDivElement);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "date",
      })
    );
    xAxis.data.setAll(data);

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Визитов",
        xAxis: xAxis,
        yAxis: yAxis,
        categoryXField: "date",
        valueYField: "visits",
        fill: am5.color("#84cc16"),
        stroke: am5.color("#84cc16"),
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{categoryX} было {valueY} визитов",
        }),
      })
    );
    series.strokes.template.setAll({
      strokeWidth: 3,
    });
    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true,
    });

    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));
    //@ts-ignore
    this.root = root;
  },
  beforeUnmount() {
    if (this.root) {
      //@ts-ignore
      this.root.dispose();
    }
  },
};
</script>

<style scoped lang="scss">
.chart {
  padding: 2rem 0;
  width: 100%;
  height: 70vh;
}
</style>
