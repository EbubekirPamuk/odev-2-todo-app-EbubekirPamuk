import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
	const [toDoList, setToDoList] = useState([
		{ line: 1, todo: 'first task', active: true },
    { line: 2, todo: 'second task', active: true },
    { line: 3, todo: 'third task', active: true },
	]);

	const [oldList, setOldList] = useState([]);

	const addItem = (item) => {
		item.preventDefault();
		let itemData = item.target.elements.todoitem.value;

		setToDoList([
			...toDoList,
			{
				line: toDoList.length > 0 ? toDoList[toDoList.length - 1].line + 1 : 0,
				todo: itemData,
				active: true,
			},
		]);

		if (oldList.length > 0) {
			setOldList([
				...oldList,
				{
					line: toDoList.length > 0 ? toDoList[toDoList.length - 1].line + 1 : 0,
					todo: itemData,
					active: true,
				},
			]);
		}

		item.target.elements.todoitem.value = '';
	};

	const removeItem = (todo) => {
		if (oldList.length > 0) {
			const items = oldList.filter((item) => item.line !== todo);
			setOldList(items);
		}

		const items = toDoList.filter((item) => item.line !== todo);
		setOldList(items);
	};

	const isActiveItem = (todo) => {
		for (let i = 0; i < toDoList.length; i++) {
			if (todo === toDoList[i].line) {
				toDoList[i].active = !toDoList[i].active;
				setOldList([...toDoList]);
			}
		}
	};

	const filterActive = () => {
		let items;
		if (oldList.length > 0) {
			items = oldList.filter((item) => item.active === true);
		} else {
			items = toDoList.filter((item) => item.active === true);
			setOldList([...toDoList]);
		}
		setOldList(items);
	};

	const filterCompleted = () => {
		let items;
		if (oldList.length > 0) {
			items = oldList.filter((item) => item.active === false);
		} else {
			items = toDoList.filter((item) => item.active === false);
			setOldList([...toDoList]);
		}
		setOldList(items);
	};

	const filterAll = () => {
		if (oldList.length > 0) {
			setToDoList([...oldList]);
			setOldList([]);
		} else {
			setOldList([...toDoList]);
		}
	};

	const clearItems = () => {
		if (oldList.length > 0) {
			const items = oldList.filter((item) => item.active !== false);
			setOldList(items);
		}

		const items = toDoList.filter((item) => item.active !== false);
		setOldList(items);
	};

	return (
		<div>
			<section className="todoapp">
				<Header addItem={addItem} />
				<Main
					toDoList={toDoList}
					removeItem={removeItem}
					isActiveItem={isActiveItem}
				/>
				<Footer
					todoLength={toDoList.length}
					filterActive={filterActive}
					filterAll={filterAll}
					filterCompleted={filterCompleted}
					clearItems={clearItems}
				/>
			</section>
		</div>
	);
}

export default App;
