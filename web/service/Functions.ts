import { functions } from "./Firebase";
import { httpsCallable } from "firebase/functions"
const client = httpsCallable<Request, Response>(functions, 'helloWorld')

type Request = {
  name: string
}
type Response = {
  message: string
}
export const callHelloWorld = (name: string): Promise<{ message: string }> => {
  return client({
    name
  }).then(v => v.data)
}