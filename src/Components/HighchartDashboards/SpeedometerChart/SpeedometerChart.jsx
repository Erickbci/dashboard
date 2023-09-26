import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';

if (typeof Highcharts === 'object') {
    HighchartsMore(Highcharts);
    SolidGauge(Highcharts);
  }


  

const SpeedometerChart = ({value}) => {

    console.log(value);
    
    const options = {
        chart: {
          type: 'gauge',
        },
        title: {
          text: 'Meta de vendas diária',
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#FFF'],
                  [1, '#333'],
                ],
              },
              borderWidth: 0,
              outerRadius: '109%',
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#333'],
                  [1, '#FFF'],
                ],
              },
              borderWidth: 1,
              outerRadius: '107%',
            },
            {
              // Default background
            },
            {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%',
            },
          ],
        },
        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          labels: {
            y: 16,
          },
          // title: {
          //   text: 'Meta',
          //   y: 40,
          // },
          plotBands: [
            {
              from: 0,
              to: 60,
              color: '#55BF3B', // Green
            },
            {
              from: 60,
              to: 80,
              color: '#DDDF0D', // Yellow
            },
            {
              from: 80,
              to: 100,
              color: '#DF5353', // Red
            },
          ],
        },
        series: [
          {
            name: 'Porcentagem',
            data: [value],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') +
                '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver;">%</span>' +
                '</div>',
            },
            tooltip: {
              valueSuffix: ' %',
            },
          },
        ],
      };
    

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default SpeedometerChart