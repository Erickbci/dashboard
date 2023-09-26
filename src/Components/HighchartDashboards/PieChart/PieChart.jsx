import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';

if (typeof Highcharts === 'object') {
    exporting(Highcharts);
    exportData(Highcharts);
    accessibility(Highcharts);
  }

  const generatePieOptions = () => {
    return {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie Chart',
      },
      series: [{
        name: 'Data',
        colorByPoint: true,
        data: [
          {
            name: 'Category 1',
            y: 30,
          },
          {
            name: 'Category 2',
            y: 20,
          },
          {
            name: 'Category 3',
            y: 50,
          },
        ],
      }],
    };
  };

  const PieChart = () => {
    useEffect(() => {
      Highcharts.setOptions({
        credits: {
          enabled: false,
        },
      });
    }, []);
  
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={generatePieOptions()} />
      </div>
    );
  };
  
  export default PieChart;