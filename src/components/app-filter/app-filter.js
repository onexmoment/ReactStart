import './app-filter.css'

const AppFilter = (props) => {
	const btnData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'rise', label: 'На повышение'},
		{name: 'salary', label: 'З/П больше 1000$'}
	]
	const elements = btnData.map(({name, label}) => {
		return	(<button
		className={`btn ${props.filter === name ? 'btn-light' : 'btn-outline-light'}`}
		key={name}
		onClick={() => props.onUpdateFilter(name)}
		type="button">
			{label}
	</button>)
	})
		return (
			<div className="btn-group">
				{elements}
				{/* <button
					className='btn btn-light'
					type="button">
						Все сотрудники
				</button>
				<button 
					className='btn btn-outline-light'
					type="button">
						На повышение
				</button>
				<button 
					className='btn btn-outline-light'
					type="button">
						З/П больше 1000$
				</button> */}
			</div>
		)
	}

export default AppFilter;