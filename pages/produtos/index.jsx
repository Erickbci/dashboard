import Link from 'next/link';
import GridChart from 'src/Components/GridChart/GridChart';
import Heading from 'src/UI/Heading/Heading';

const Products = () => {
    return (
        <section>
            <Heading title='Produtos' subtitle='Esses são os produtos disponíveis' />
            <Link href='/produtos/adicionar' className='btn btn-primary mb-3'>
                Novo produto
            </Link>
            <GridChart />
        </section>
    )
}

export default Products