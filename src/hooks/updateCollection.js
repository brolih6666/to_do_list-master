import { projectFirestore } from '../config/firebase'
import editBtnImg from '../assets/edit.svg'
import saveBtnImg from '../assets/save.svg'
export default function UpdateCollection(collection) {
	const firestore = projectFirestore.collection(collection)
	const addTask = async doc => {
		await firestore.add(doc)
	}
	const deleteTask = async id => {
		await firestore.doc(id).delete()
	}
	const editTask = async (e, id) => {
		e.preventDefault()
		const curDiv = e.target.parentElement.parentElement.parentElement
		const curTaskInput = curDiv.querySelectorAll('input')[0]
		const curDateInput = curDiv.querySelectorAll('input')[1]
		if (e.target.alt == 'save') {
			await firestore.doc(id).update({ task: curTaskInput.value, date: curDateInput.value })
			e.target.alt = 'edit'
			e.target.src = editBtnImg
			curDateInput.readOnly = true
			curTaskInput.readOnly = true
		} else if ((e.target.alt = 'edit')) {
			e.target.src = saveBtnImg
			e.target.alt = 'save'
			curDateInput.readOnly = false
			curTaskInput.readOnly = false
			curTaskInput.focus()
		}
	}
	const completeTask = async id => {
		await firestore.doc(id).update({ completed: true })
	}
	return { addTask, deleteTask, editTask, completeTask }
}
