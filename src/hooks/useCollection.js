import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../config/firebase'
export default function useCollection(collection) {
	const [docs, setDocs] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy('date', 'asc')
			.onSnapshot(
				snapshot => {
					let results = []
					snapshot.docs.forEach(doc => {
						results.push({ ...doc.data(), id: doc.id })
					})
					setDocs(results)
					setError(null)
				},
				error => {
					console.log(error)
					setError('could not fetch the data')
				}
			)
		return () => unsub()
	}, [collection])

	return { docs, error }
}
