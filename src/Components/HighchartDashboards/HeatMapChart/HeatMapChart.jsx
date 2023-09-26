import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import heatmap from 'highcharts/modules/heatmap';
import HighchartsMore from 'highcharts/highcharts-more';

if (typeof Highcharts === 'object') {
    heatmap(Highcharts);
    HighchartsMore(Highcharts);
  }

  // const generateHeatmapOptions = () => {
  //   return {
  //     chart: {
  //       type: 'heatmap',
  //     },
  //     title: {
  //       text: 'Heat Map Chart',
  //     },
  //     xAxis: {
  //       categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
  //     },
  //     yAxis: {
  //       categories: ['0K', '5K', '10k', '15K'],
  //     },
  //     colorAxis: {
  //       min: 0,
  //       minColor: '#FFFFFF',
  //       // maxColor: Highcharts.getOptions().colors[0],
  //     },
  //     series: [{
  //       name: 'Heatmap Data',
  //       data: [
  //         [0, 0, 10, 12],
  //         [0, 1, 19, 22],
  //         [0, 2, 8, 15],
  //         [1, 0, 92, 100],
  //         [1, 1, 58, 55],
  //         [1, 2, 78, 15],
  //         [2, 0, 35, 40],
  //         [2, 1, 15, 100],
  //         [2, 2, 123, 154],
  //       ],
  //       dataLabels: {
  //         enabled: true,
  //         color: '#000000',
  //       },
  //     }],
  //   };
  // };

  // const salesData = [
  //   [0, 0, 100], // January
  //   [1, 0, 200], // February
  //   [2, 0, 150], // March
  //   // Add data for the remaining months...
  // ];
  
  // Generate the heatmap options
  // const options = {
  //   chart: {
  //     type: 'heatmap',
  //     marginTop: 40,
  //     marginBottom: 80,
  //     plotBorderWidth: 1
  //   },
  //   title: {
  //     text: 'Monthly Sales Heatmap'
  //   },
  //   xAxis: {
  //     categories: ['January', 'February', 'March', /* Add the remaining months */],
  //     title: {
  //       text: 'Month'
  //     }
  //   },
  //   yAxis: {
  //     categories: ['0K', '1K', '2K', '3K'],
  //     title: {
  //       text: 'Sales'
  //     }
  //   },
  //   colorAxis: {
  //     min: 0,
  //     minColor: '#FFFFFF',
  //     maxColor: Highcharts.getOptions().colors[0]
  //   },
  //   legend: {
  //     align: 'right',
  //     layout: 'vertical',
  //     margin: 0,
  //     verticalAlign: 'top',
  //     y: 25,
  //     symbolHeight: 280
  //   },
  //   tooltip: {
  //     formatter: function () {
  //       return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
  //         this.point.value + '</b> units in <br><b>' +
  //         this.series.yAxis.categories[this.point.y] + '</b>';
  //     }
  //   },
  //   series: [{
  //     name: 'Sales',
  //     borderWidth: 1,
  //     data: salesData,
  //     dataLabels: {
  //       enabled: true,
  //       color: '#000000',
  //       format: '{point.value}'
  //     }
  //   }],
  // };

const HeatMapChart = () => {

  const options = {
    chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1
    },
    title: {
      text: 'Sales Heatmap'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      title: {
        text: 'Month'
      }
    },
    yAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      title: {
        text: 'Day'
      }
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      // maxColor: Highcharts.getOptions().colors[0]
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 280
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
          this.point.value + '</b> units in <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
      }
    },
    series: [{
      name: 'Sales',
      borderWidth: 1,
      data: [
        [0, 2, 102],
        [1, 0, 200],
        [2, 0, 150],
        // Add your data here
      ],
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }]
  };

    useEffect(() => {
        Highcharts.setOptions({
          credits: {
            enabled: false,
          },
        });
      }, []);

    return (
        <div>
            <HighchartsReact
                id="highcharts"
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default HeatMapChart