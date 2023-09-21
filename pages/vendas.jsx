import GridChart from 'src/Components/GridChart/GridChart';
import Heading from 'src/UI/Heading/Heading';

const Sales = () => {
    return (
        <section>
            <Heading title='Vendas' subtitle='Aqui está seu histórico de vendas' />
            <GridChart />
        </section>
    )
}

export default Sales