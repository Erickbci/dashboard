import Link from "next/link";
import Cards from "src/Components/Card/Cards";
import SalesGoal from "src/Components/SalesGoal/SalesGoal";
import SalesHistory from "src/Components/SalesHistory/SalesHistory";
import TopSales from "src/Components/TopSales/TopSales";
import Heading from "src/UI/Heading/Heading";
import client from "src/sanity";
import styles from 'styles/Dashboard.module.scss'

export default function Home({ orders, products, config }) {

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
  const config = await client.fetch('*[_type == "config"]')

  return {
    props: {
      orders,
      products,
      config,
    },
  }
}
