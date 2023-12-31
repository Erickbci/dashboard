import PieChart from 'src/Components/HeatMap/HeatMap';
import HeatMap from 'src/Components/PieChart/PieChart';
import SalesHistory from 'src/Components/SalesHistory/SalesHistory';
import Heading from 'src/UI/Heading/Heading';
import styles from 'styles/Relatorio.module.scss'


const Report = () => {
    return (
        <section className={styles.section}> 
            <Heading title='Relatório' subtitle='Esses são os seus relatórios de venda' />
            <SalesHistory />
            <div className={styles.charts}>
                <HeatMap />
                <PieChart />
            </div>
        </section>
    )
}

export default Report