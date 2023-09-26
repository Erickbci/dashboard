import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const generateLineOptions = () => {
    return {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yAxis: {
        title: {
          text: 'Value',
        },
      },
      series: [{
        name: 'Data',
        data: [10, 20, 30, 40, 50, 60, 70],
      }],
    };
  };

  const LineChart = () => {
    useEffect(() => {
      Highcharts.setOptions({
        credits: {
          enabled: false,
        },
      });
    }, []);
  
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={generateLineOptions()} />
      </div>
    );
  };
  
  export default LineChart;