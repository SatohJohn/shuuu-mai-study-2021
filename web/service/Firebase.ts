import { initializeApp, getApps } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'

const apps = getApps()
const firebaseConfig = {
  apiKey: "hoge",
  authDomain: "localhost",
  projectId: 'demo-test',
  storageBucket: "default-bucket",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app)
const firestore = getFirestore(app)
const functions = getFunctions(app, 'asia-northeast1')
connectAuthEmulator(auth, `http://localhost:9099`)
connectStorageEmulator(storage, 'localhost', 9199)
connectFirestoreEmulator(firestore, 'localhost', 8080)
connectFunctionsEmulator(functions, 'localhost', 5001)

export {
  auth,
  storage,
  firestore,
  functions
}
