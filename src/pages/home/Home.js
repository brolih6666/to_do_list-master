import { React } from 'react'
import useCollection from '../../hooks/useCollection'
import styles from './Home.module.css'
import DisplayTask from './DisplayTask'
import CreateTask from './CreateTask'
export default function Home() {
	const { docs, error } = useCollection('tasks')

	return (
		<>
			{error && (
				<div className={styles.error}>
					<p>Error: {error}</p>
				</div>
			)}
			{!error && docs && (
				<div>
					<h1 className={styles.heading}>Task List </h1>
					<DisplayTask docs={docs} />
					<CreateTask />
				</div>
			)}
		</>
	)
}
