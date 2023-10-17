const AddSaller = () => {
    return (
        <form>
            <div>
                <label htmlFor="dropdown" className='hidden'>
                    Vendedora
                </label>
                <input 
                    type="text"
                    name='saller'
                    id='saller'
                    placeholder='Vendedora' 
                />
            </div>
            <div>
                <label htmlFor="percentage" className='hidden'>
                    Percentual
                </label>
                <input 
                    type="number"
                    name='percentage'
                    id='percentage'
                    min='0'
                    placeholder='Percentual' 
                />
            </div>
            <div>
                <label htmlFor="job" className='hidden'>
                    Profissão
                </label>
                <input 
                    type="text"
                    name='job'
                    id='job'
                    placeholder='Profissao' 
                />
            </div>
            <button className='btn btn-primary'>Confirmar</button>
        </form>
    )
}

export default AddSaller