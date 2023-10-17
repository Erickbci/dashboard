import AddSaller from 'src/Components/AddSaller/AddSaller'
import Heading from 'src/UI/Heading/Heading'

const NewSale = () => {
    return (
        <section>
            <Heading title='Adicionar Vendedora' subtitle='Adicione uma nova vendedora'/>
            <div>
                <AddSaller />
            </div>
        </section>
    )
}

export default NewSale