import { useSelector } from "react-redux";
import styles from "./SalesGoal.module.scss";
import useFormatPrice from "src/hooks/useFormatPrice";
import SpeedometerChart from "../HighchartDashboards/SpeedometerChart/SpeedometerChart";

const SalesGoal = () => {
  const { today } = useSelector((state) => state.dashboard.sales);
  const { salesGoal } = useSelector((state) => state.ui);

  const todaySales = useFormatPrice(today);
  const formatSalesGoal = useFormatPrice(salesGoal);

  const percentage = (today / salesGoal) * 100;

  return (
    <div className={styles["sales-goal"]}>
      {/* <h3>Meta de vendas diária</h3> */}
      <div className={styles.chart}>
        {today !== null ? (
          <SpeedometerChart value={percentage} />
        ) : (
          <span>Carregando...</span>
        )}
      </div>
      <h4>
        {todaySales} / {formatSalesGoal}
      </h4>
    </div>
  );
};

export default SalesGoal;
