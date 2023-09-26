import { setConfig } from "src/store/ui-slice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "src/Components/Card/Cards";
import SalesGoal from "src/Components/SalesGoal/SalesGoal";
import SalesHistory from "src/Components/SalesHistory/SalesHistory";
import TopSales from "src/Components/TopSales/TopSales";
import Heading from "src/UI/Heading/Heading";
import client from "src/sanity";
import { createOrdersWithProduct, populateOrders, populateProducts, populateSales } from "src/store/dashboard-slice";
import styles from 'styles/Dashboard.module.scss'
import HeatMapChart from "src/Components/HighchartDashboards/HeatMapChart/HeatMapChart";
import LineChart from "src/Components/HighchartDashboards/LineChart/LineChart";


export default function Home({ orders, products, config }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(populateOrders(orders))
    dispatch(populateProducts(products))
    dispatch(createOrdersWithProduct())
    dispatch(populateSales())
    dispatch(setConfig(config))
  }, [])

  return (
    <section className={styles.dashboard}>
      <Heading 
      title='Olá 👋, Studio Kalon'  
      subtitle='Confira seus resultados de hoje'
      />
      <Link href='/nova-venda' className="btn btn-primary">
        Nova venda
      </Link>
      <section className={styles.columns}>  
        <section className={styles.column1}>  
          <Cards />
          <SalesHistory />
        </section>
        <section className={styles.column2}>
          <SalesGoal />
          <TopSales />
        </section>
      </section>
    </section>
  )
}

export const getServerSideProps = async () => {
  const orders = await client.fetch('*[_type == "orders"]')
  const products = await client.fetch('*[_type == "products"]')
  const config = await client.fetch('*[_type == "config"][0]')

  return {
    props: {
      orders,
      products,
      config,
    },
  }
}
