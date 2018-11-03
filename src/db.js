import firebase from 'firebase/app'
import 'firebase/firestore'
import snakeCase from 'lodash/snakeCase'

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
db.enablePersistence()

// helpers

export const getList = id => db.collection('lists').doc(id)

export const getItems = listRef => db.collection('items')
  .where('belongsTo', '==', listRef)
  .get()
  .then(snap => snap.docs.map(doc => ({ id: doc.id, _ref: doc.ref, ...doc.data() })))

export const addItem = (list, item, quantity = 1) =>
  db.collection('items').doc(`${list.id}-${snakeCase(item)}`).set({
    belongsTo: list,
    value: item,
    quantity,
    archived: false
  })

export const updateItem = (item, updates) => item._ref.update(updates)

export const deleteItem = item => item._ref.delete()

export const deleteItems = items => {
  const batch = db.batch()

  items.forEach(item => batch.delete(item._ref))
  return batch.commit()
}

export const onListUpdate = (listRef, _do) => db.collection('items')
  .where('belongsTo', '==', listRef)
  .orderBy('value')
  .onSnapshot(snap => {
    const items = snap.docs.map(doc => ({ id: doc.id, _ref: doc.ref, ...doc.data() }))

    _do(items)
  })
