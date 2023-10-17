import Link from 'next/link';
import GridChart from 'src/Components/GridChart/GridChart';
import Heading from 'src/UI/Heading/Heading';

const Sallers = () => {
    return (
        <section>
            <Heading title='Vendedoras' subtitle='Essas são as vendedoras ativas' />
            <Link href='/vendedoras/adicionar' className='btn btn-primary mb-3'>
                Nova Vendedora
            </Link>
            <GridChart />
        </section>
    )
}

export default Sallers