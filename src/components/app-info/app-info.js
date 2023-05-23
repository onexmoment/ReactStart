import './app-info.css';

const AppInfo = ({onIncrease, numberOfEmployees}) => {
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {numberOfEmployees}</h2>
			<h2>Премию получат: {onIncrease}</h2>
		</div>
	)
}

export default AppInfo;