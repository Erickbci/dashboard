import Link from "next/link";
import Cards from "src/Components/Card/Cards";
import SalesGoal from "src/Components/SalesGoal/SalesGoal";
import SalesHistory from "src/Components/SalesHistory/SalesHistory";
import TopSales from "src/Components/TopSales/TopSales";
import Heading from "src/UI/Heading/Heading";
import styles from 'styles/Dashboard.module.scss'

export default function Home() {
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
