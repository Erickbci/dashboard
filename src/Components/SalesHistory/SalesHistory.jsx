import { useSelector } from 'react-redux';
import LineChart from '../HighchartDashboards/LineChart/LineChart';
import useGetMonth from 'src/hooks/useGetMonth';

// const data = [
//     { month: 'Jan', sales: 35 },
//     { month: 'Feb', sales: 20 },
//     { month: 'Mar', sales: 45 },
//     { month: 'Apr', sales: 55 },
//     { month: 'May', sales: 35 },
//     { month: 'Jun', sales: 15 },
//     { month: 'Jul', sales: 10 },
// ]

const SalesHistory = () => {
    const { merged } = useSelector((state) => state.dashboard.orders);

    const getMonth = useGetMonth();
    const ordersWithProduct = merged ? [...merged] : [];
  
    const months = [
      ...new Set(
        ordersWithProduct
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((order) => getMonth(order.date))
      ),
    ];
  
    const sales = months.map((month) =>
      ordersWithProduct
        .filter((order) => getMonth(order.date) === month)
        .map((order) => order.amount)
        .reduce((acc, curr) => acc + curr, 0)
    );
  
    const data = months
      .map((month, i) => ({ month, sales: sales[i] }))
      .slice(-6);
    
    // const newData = data.map((month, i) => data[i].month)
    // console.log(months);
    // console.log(sales);
    // console.log(newData);

    return (
        <div>
            {data.length > 0 ? (
                <LineChart months={months} sales={sales} data={data}/>
            ) : (
                <span>Carregando...</span>
            )}
        </div>
    )
}

export default SalesHistory;