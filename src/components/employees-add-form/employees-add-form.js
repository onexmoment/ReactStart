import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			nameError: '',
			salaryError: ''
		}
	}

	onChangeValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			nameError: '',
			salaryError: ''
		})
	}

	onSubmit = (e) => {
		e.preventDefault(); 
		const {name, salary} = this.state;
		let isValid = true;

		if (name.length <= 2) {
			this.setState({
				nameError: 'Имя должно содержать не менее 3 символов'
			})
			isValid = false;
		}
		if (salary.length === 0) {
			this.setState({
				salaryError: 'Необходимо указать зарплату'
			})
			isValid = false;
		}
		if (isValid) {
			this.props.onAdd(name, salary)
			this.setState({
				name: '',
				salary: '',
			})
		} else {
			setTimeout(() => {
				this.setState({
					nameError: '',
					salaryError: ''
				})
			}, 3000)
		}
	}


	render() {
		const {name, salary, nameError, salaryError} = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}>
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						value={name}
						onChange={this.onChangeValue}/>
					<span className="error-message">{nameError}</span>
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="salary"
						value={salary}
						onChange={this.onChangeValue}/>
					<span className="error-message">{salaryError}</span>
	
					<button type="submit"
							className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;