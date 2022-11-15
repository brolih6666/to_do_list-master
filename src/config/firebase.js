import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
	apiKey: 'AIzaSyCMRyDjjykQAFlAoPOHoUqo9fBVjM5O4Ak',
	authDomain: 'task-list-1fd49.firebaseapp.com',
	projectId: 'task-list-1fd49',
	storageBucket: 'task-list-1fd49.appspot.com',
	messagingSenderId: '1009126248999',
	appId: '1:1009126248999:web:45d4cde5f1a27684023402',
}
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()

export { projectFirestore }
