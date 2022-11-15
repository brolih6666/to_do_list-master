// styles
import styles from './DisplayTask.module.css'
// assets
import editBtnImg from '../../assets/edit.svg'
import deleteBtn from '../../assets/delete.svg'
import verifiedBtnImg from '../../assets/verified.svg'
// imports
import { React } from 'react'
import updateCollection from '../../hooks/updateCollection'

export default function DisplayTask({ docs }) {
	const { deleteTask, editTask, completeTask } = updateCollection('tasks')

	return (
		<div className={styles.tasks}>
			{docs.map(doc => {
				return (
					<div className={styles['task-wrap']} key={doc.id}>
						<div className={styles['input-wrap']}>
							<input
								className={`${styles['task-name']} ${doc.completed ? `${styles.completed}` : ''}`}
								type='text'
								defaultValue={doc.task}
								readOnly
							/>
							<input className={styles['task-date']} type='date' defaultValue={doc.date} readOnly />
						</div>
						<div className={styles['button-wrap']}>
							{!doc.completed && (
								<button className={styles['task-button']}>
									<img src={editBtnImg} alt='edit' onClick={e => editTask(e, doc.id)} />
								</button>
							)}

							<button className={styles['task-button']}>
								<img onClick={() => deleteTask(doc.id)} src={deleteBtn} alt='delete' />
							</button>
							<button className={styles['task-button']}>
								<img src={verifiedBtnImg} alt='verified' onClick={e => completeTask(doc.id)} />
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}
