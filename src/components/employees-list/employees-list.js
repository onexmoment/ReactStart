import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProperty, onUpdateSalary}) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		// return <EmployeesListItem name={item.name} salary={item.salary}/>
		return <EmployeesListItem key={id}
		{...itemProps}
		onUpdateSalary={(e) => onUpdateSalary(id, e.currentTarget.value)}
		onDelete={() => onDelete(id)}
		onToggleProperty={(e) => onToggleProperty(id, e.currentTarget.getAttribute('data-toggle'))}/>
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployeesList;