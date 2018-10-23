import firebase from 'firebase/app'
import 'firebase/firestore'

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY || console.error('REACT_APP_FIREBASE_API_KEY not defined')
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID || console.error('REACT_APP_FIREBASE_PROJECT_ID not defined')

const config = {
  apiKey: apiKey,
  projectId: `${projectId}`,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  storageBucket: `${projectId}.appspot.com`,
}
firebase.initializeApp(config)

export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })
