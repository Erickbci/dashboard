import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



  const LineChart = ({months, sales, data}) => {
    const generateLineOptions = () => {
      return {
        chart: {
          type: 'line',
          height: 550,
          width: 1000,
          marginTop: 100,
        },
        title: {
          text: 'Histórico de vendas',
          style: {
            marginTop: 50,
            fontSize: '24px'
          }
        },
        xAxis: {
          categories: months,
          gridLineWidth: 0.5,
          gridLineColor: 'gray',
          labels: {
            style: {
              fontSize: '18px' 
            }
          }
        },
        yAxis: {
          title: {
            text: 'Vendas',
            style: {
              fontSize: '14px' 
            }
          },
          labels: {
            formatter: function() {
              return 'R$ '+ this.value
            },
            style: {
              fontSize: '18px'
            }
          }
        },
        series: [{
          name: 'Venda',
          data: sales,
          dataLabels: {
            enabled: true,
            format: 'R$ {y}',
            style: {
              fontSize: '14px',
              color: 'black'
            }
          }
        }],
      };
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
        <HighchartsReact highcharts={Highcharts} options={generateLineOptions()} />
      </div>
    );
  };
  
  export default LineChart;