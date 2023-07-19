import './TodosLoading.css'

function TodosLoading(){
    return (
        <div className='loading'>
            <li className='loading-item'>
                <div className='first_circle'></div>
                <div className='second_circle'></div>
            </li>
        </div>
    )
}

export { TodosLoading }