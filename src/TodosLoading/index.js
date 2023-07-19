import './TodosLoading.css'

function TodosLoading(){
    return (
        <ul className='loading'>
            <li className='loading-item'>
                <div className='first_circle'></div>
                <div className='second_circle'></div>
            </li>
            <li className='loading-item'>
                <div className='first_circle'></div>
                <div className='second_circle'></div>
            </li>
            <li className='loading-item'>
                <div className='first_circle'></div>
                <div className='second_circle'></div>
            </li>
        </ul>
    )
}

export { TodosLoading }