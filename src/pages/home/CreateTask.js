import { React, useState } from 'react'
import styles from './CreateTask.module.css'
import updateCollection from '../../hooks/updateCollection'
export default function CreateTask() {
	const { addTask, deleteTask } = updateCollection('tasks')
	const [task, setTask] = useState('')
	const [date, setDate] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		console.log()
		if (task && new Date(date).getFullYear() > 2016) {
			addTask({ task, date, completed: false })
			setDate('')
			setTask('')
		}
	}
	return (
		<form onSubmit={handleSubmit} className={styles['create-task']}>
			<h2>Add a task</h2>
			<label className={styles['add-task']}>
				<span>Task: </span>
				<input className='editTaskInput' type='text' onChange={e => setTask(e.target.value)} value={task} />
			</label>
			<label className={styles['add-date']}>
				<span>Date: </span>
				<input className='editDateI' type='date' onChange={e => setDate(e.target.value)} value={date} />
			</label>
			<button className='btn'>Add Task</button>
		</form>
	)
}
