import { firestore } from './Firebase'
import { collection, onSnapshot } from 'firebase/firestore'

export const watchData = <T>(subscriber: (data: T, newIndex: number) => void): () => void => {
  return onSnapshot(collection(firestore, 'texts').withConverter<T>({
    toFirestore: (modelObject) => {
      return {}
    },
    fromFirestore: (doc) => {
      return doc.data() as T
    }
  }), {
    next: (snapshot) => {
      console.log('------------next------------')
      snapshot.forEach(v => {
      })
      snapshot.docChanges().forEach(v => {
        subscriber(v.doc.data(), v.newIndex)
      })
      // snapshot.docs.forEach(v => {
      // })
    },
    error: (error) => {
      console.log('------------error------------')
      console.log(error)
    },
    complete: () => {
      console.log('------------complete------------')
    }
  })
}