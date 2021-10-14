import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase'

export const login = (id: string, password: string): Promise<{
  uid: string,
  profileUrl: string | null
}> => {
  return signInWithEmailAndPassword(auth, id, password).then((user) => {
    console.log('login complete')
    console.log(`${user.user.uid}`)
    return {
      uid: user.user.uid,
      profileUrl: user.user.photoURL,
    }
  })
}
