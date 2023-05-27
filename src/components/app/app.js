import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [
				{name: "John C.", salary: 1000, increase: false, rise: true, id: 1},
				{name: "Alex M.", salary: 800, increase: true, rise: false, id: 2},
				{name: "Craig R", salary: 3000, increase: false, rise: false, id: 3}
			],
			term: '',
			filter: 'all'
		}

		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name,salary) => {
		const newItem = {
				name: name,
				salary: salary,
				increase: false,
				rise: false,
				id: this.maxId++
			}
		this.setState(({data}) => {
			return {
				data : [...data, newItem]
			}
		})
	}

	onToggleProperty = (id, property) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [property]: !item[property]}
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => item.name.indexOf(term) > -1)
	}

	onUpdateSearch = (term) => {
		this.setState({term})
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'salary':
				return items.filter(item => item.salary > 1000);
			default: 
				return items
		}
	}


	onUpdateFilter = (filter) => {
		this.setState({filter})
	}


	render() {
		const {data, filter, term} = this.state;
		const onIncrease = data.filter(item => item.increase).length,
			numberOfEmployees = data.length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo 
				onIncrease={onIncrease}
				numberOfEmployees={numberOfEmployees}/>
	
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
				</div>
	
				<EmployeesList
				data={visibleData}
				onDelete={this.deleteItem}
				onToggleProperty={this.onToggleProperty}
				/>
	
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;