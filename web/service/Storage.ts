import { storage } from './Firebase'
import { ref, uploadBytes } from 'firebase/storage'

export const upload = (file: File) => {
  return uploadBytes(ref(storage, `${file.name}`), file).then((v) => {
    console.log(v)
  })
}